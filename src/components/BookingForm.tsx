"use client";

import { useState, useMemo } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Video,
  AlertCircle,
  Check,
} from "lucide-react";
import {
  siteData,
  consultationTypes,
  bookingConfig,
} from "@/lib/siteData";

// ============================================================
// GOOGLE FORMS — Replace with your Booking Form entry IDs
// (Create a separate Google Form for bookings)
// ============================================================
const BOOKING_FORM = {
  actionUrl: "REPLACE_WITH_YOUR_GOOGLE_BOOKING_FORM_RESPONSE_URL",
  fields: {
    name: "entry.REPLACE_NAME",
    phone: "entry.REPLACE_PHONE",
    email: "entry.REPLACE_EMAIL",
    practiceArea: "entry.REPLACE_PRACTICE_AREA",
    consultationType: "entry.REPLACE_CONSULTATION_TYPE",
    date: "entry.REPLACE_DATE",
    timeSlot: "entry.REPLACE_TIME_SLOT",
    caseDetails: "entry.REPLACE_CASE_DETAILS",
    language: "entry.REPLACE_LANGUAGE",
    followUp: "entry.REPLACE_FOLLOWUP",
  },
};

type Step = "type" | "datetime" | "details" | "confirm";

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

function formatDate(date: Date) {
  return date.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function generateTimeSlots(date: Date): string[] {
  const dayOfWeek = date.getDay();
  if (bookingConfig.closedDays.includes(dayOfWeek)) return [];

  const isMonday = dayOfWeek === 1;
  const startHour = isMonday ? bookingConfig.mondayStart : bookingConfig.slotStart;
  const endHour = bookingConfig.slotEnd;

  const slots: string[] = [];
  let current = startHour;

  while (current + bookingConfig.slotDuration / 60 <= endHour) {
    const hours = Math.floor(current);
    const minutes = Math.round((current - hours) * 60);
    const time = new Date(2000, 0, 1, hours, minutes);
    slots.push(
      time.toLocaleTimeString("en-IN", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
    );
    current += (bookingConfig.slotDuration + bookingConfig.bufferMinutes) / 60;
  }

  return slots;
}

function isDateSelectable(date: Date): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const minDate = new Date(today);
  minDate.setHours(minDate.getHours() + bookingConfig.minNoticeHours);

  if (date < today) return false;
  if (date.toDateString() === today.toDateString() && new Date() > minDate) return false;
  if (bookingConfig.closedDays.includes(date.getDay())) return false;

  return true;
}

export default function BookingForm() {
  const [step, setStep] = useState<Step>("type");
  const [selectedType, setSelectedType] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Calendar state
  const today = new Date();
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [viewYear, setViewYear] = useState(today.getFullYear());

  // Form fields
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    practiceArea: "",
    caseDetails: "",
    language: "",
    followUp: "",
  });

  const timeSlots = useMemo(
    () => (selectedDate ? generateTimeSlots(selectedDate) : []),
    [selectedDate]
  );

  const selectedConsultation = consultationTypes.find(
    (t) => t.id === selectedType
  );

  function handleFormChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    // Submit to Google Forms via hidden iframe
    const params = new URLSearchParams();
    params.set(BOOKING_FORM.fields.name, formData.name);
    params.set(BOOKING_FORM.fields.phone, formData.phone);
    params.set(BOOKING_FORM.fields.email, formData.email);
    params.set(BOOKING_FORM.fields.practiceArea, formData.practiceArea);
    params.set(BOOKING_FORM.fields.consultationType, selectedType);
    params.set(
      BOOKING_FORM.fields.date,
      selectedDate ? formatDate(selectedDate) : ""
    );
    params.set(BOOKING_FORM.fields.timeSlot, selectedSlot);
    params.set(BOOKING_FORM.fields.caseDetails, formData.caseDetails);
    params.set(BOOKING_FORM.fields.language, formData.language);
    params.set(BOOKING_FORM.fields.followUp, formData.followUp);

    const iframe = document.getElementById(
      "booking-iframe"
    ) as HTMLIFrameElement;
    if (iframe) {
      iframe.src = `${BOOKING_FORM.actionUrl}?${params.toString()}`;
    }

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  }

  // Calendar navigation
  function prevMonth() {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(viewYear - 1);
    } else {
      setViewMonth(viewMonth - 1);
    }
  }

  function nextMonth() {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(viewYear + 1);
    } else {
      setViewMonth(viewMonth + 1);
    }
  }

  const monthName = new Date(viewYear, viewMonth).toLocaleDateString("en-IN", {
    month: "long",
    year: "numeric",
  });

  // ===== CONFIRMATION SCREEN =====
  if (submitted) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 md:p-10 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
          <Check size={28} className="text-green-600" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-green-800 mb-3">
          Consultation Request Received
        </h3>
        <p className="text-green-700 mb-2">
          Thank you. Your consultation request has been submitted.
        </p>
        <p className="text-green-700 mb-4">
          We will confirm your appointment shortly via phone or WhatsApp.
          If required, we may contact you before the meeting for basic
          clarification.
        </p>

        <div className="rounded-xl bg-white border border-green-200 p-4 text-left text-sm space-y-1 max-w-sm mx-auto mb-6">
          <p>
            <span className="text-muted">Type:</span>{" "}
            <span className="font-medium text-charcoal">
              {selectedConsultation?.title}
            </span>
          </p>
          <p>
            <span className="text-muted">Date:</span>{" "}
            <span className="font-medium text-charcoal">
              {selectedDate && formatDate(selectedDate)}
            </span>
          </p>
          <p>
            <span className="text-muted">Time:</span>{" "}
            <span className="font-medium text-charcoal">{selectedSlot}</span>
          </p>
          <p>
            <span className="text-muted">Area:</span>{" "}
            <span className="font-medium text-charcoal">
              {formData.practiceArea}
            </span>
          </p>
          <p>
            <span className="text-muted">Fee:</span>{" "}
            <span className="font-semibold text-navy">
              {selectedConsultation?.fee}
            </span>
          </p>
        </div>

        <p className="text-xs text-muted">
          Submitting this request does not create a lawyer-client relationship.
          This consultation is an initial discussion only.
        </p>
      </div>
    );
  }

  return (
    <>
      <iframe
        id="booking-iframe"
        className="hidden"
        aria-hidden="true"
        tabIndex={-1}
      />

      {/* Step indicators */}
      <div className="flex items-center justify-center gap-2 mb-8">
        {(["type", "datetime", "details"] as Step[]).map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                step === s
                  ? "bg-navy text-white"
                  : ["type", "datetime", "details"].indexOf(step) > i
                  ? "bg-gold text-white"
                  : "bg-border text-muted"
              }`}
            >
              {["type", "datetime", "details"].indexOf(step) > i ? (
                <Check size={16} />
              ) : (
                i + 1
              )}
            </div>
            {i < 2 && (
              <div
                className={`hidden sm:block w-12 h-0.5 ${
                  ["type", "datetime", "details"].indexOf(step) > i
                    ? "bg-gold"
                    : "bg-border"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* ===== STEP 1: CONSULTATION TYPE ===== */}
      {step === "type" && (
        <div>
          <h3 className="font-heading text-xl font-bold text-navy mb-2 text-center">
            Select Consultation Type
          </h3>
          <p className="text-sm text-muted text-center mb-6">
            Choose the type of consultation that best fits your needs
          </p>
          <div className="space-y-3">
            {consultationTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => {
                  setSelectedType(type.id);
                  setStep("datetime");
                }}
                className={`w-full text-left rounded-xl border p-4 transition-all ${
                  selectedType === type.id
                    ? "border-navy bg-navy/[0.03] ring-1 ring-navy"
                    : "border-border hover:border-navy/30 hover:shadow-sm"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-semibold text-navy">{type.title}</p>
                      {type.confirmation && (
                        <span className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded-full">
                          Subject to confirmation
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-muted">
                      <span className="inline-flex items-center gap-1">
                        <Clock size={14} />
                        {type.duration}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        {type.mode.includes("person") ? (
                          <MapPin size={14} />
                        ) : (
                          <Video size={14} />
                        )}
                        {type.mode}
                      </span>
                    </div>
                    <p className="text-sm text-charcoal mt-1">{type.note}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-lg font-bold text-navy">{type.fee}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ===== STEP 2: DATE & TIME ===== */}
      {step === "datetime" && (
        <div>
          <h3 className="font-heading text-xl font-bold text-navy mb-2 text-center">
            Choose Date &amp; Time
          </h3>
          <p className="text-sm text-muted text-center mb-6">
            {selectedConsultation?.title} &mdash;{" "}
            {selectedConsultation?.duration}
          </p>

          {/* Calendar */}
          <div className="rounded-xl border border-border bg-white p-4 mb-6">
            {/* Month nav */}
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={prevMonth}
                className="p-2 rounded-lg hover:bg-cream transition-colors"
                aria-label="Previous month"
              >
                <ChevronLeft size={20} className="text-navy" />
              </button>
              <h4 className="font-semibold text-navy">{monthName}</h4>
              <button
                onClick={nextMonth}
                className="p-2 rounded-lg hover:bg-cream transition-colors"
                aria-label="Next month"
              >
                <ChevronRight size={20} className="text-navy" />
              </button>
            </div>

            {/* Day headers */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                <div
                  key={d}
                  className="text-center text-xs font-medium text-muted py-1"
                >
                  {d}
                </div>
              ))}
            </div>

            {/* Days grid */}
            <div className="grid grid-cols-7 gap-1">
              {/* Empty cells for offset */}
              {Array.from({
                length: getFirstDayOfMonth(viewYear, viewMonth),
              }).map((_, i) => (
                <div key={`empty-${i}`} />
              ))}

              {/* Day buttons */}
              {Array.from({
                length: getDaysInMonth(viewYear, viewMonth),
              }).map((_, i) => {
                const date = new Date(viewYear, viewMonth, i + 1);
                const selectable = isDateSelectable(date);
                const isSelected =
                  selectedDate?.toDateString() === date.toDateString();
                const isToday =
                  today.toDateString() === date.toDateString();

                return (
                  <button
                    key={i}
                    disabled={!selectable}
                    onClick={() => {
                      setSelectedDate(date);
                      setSelectedSlot("");
                    }}
                    className={`h-10 rounded-lg text-sm font-medium transition-all ${
                      isSelected
                        ? "bg-navy text-white"
                        : isToday
                        ? "bg-gold/10 text-navy border border-gold/30"
                        : selectable
                        ? "hover:bg-cream text-charcoal"
                        : "text-muted/40 cursor-not-allowed"
                    }`}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Time slots */}
          {selectedDate && (
            <div>
              <h4 className="font-semibold text-navy mb-3">
                Available slots for {formatDate(selectedDate)}
              </h4>
              {timeSlots.length > 0 ? (
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      className={`rounded-lg border py-3 px-2 text-sm font-medium transition-all ${
                        selectedSlot === slot
                          ? "border-navy bg-navy text-white"
                          : "border-border hover:border-navy/30 text-charcoal"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted">
                  No slots available on this day. Please select another date.
                </p>
              )}
            </div>
          )}

          {/* Nav buttons */}
          <div className="flex gap-3 mt-8">
            <button
              onClick={() => setStep("type")}
              className="flex-1 rounded-lg border border-border py-3 text-sm font-semibold text-charcoal hover:bg-cream transition-colors"
            >
              Back
            </button>
            <button
              onClick={() => setStep("details")}
              disabled={!selectedDate || !selectedSlot}
              className="flex-1 rounded-lg bg-navy py-3 text-sm font-semibold text-white hover:bg-navy-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* ===== STEP 3: CLIENT DETAILS ===== */}
      {step === "details" && (
        <form onSubmit={handleSubmit}>
          <h3 className="font-heading text-xl font-bold text-navy mb-2 text-center">
            Your Details
          </h3>
          <p className="text-sm text-muted text-center mb-6">
            {selectedConsultation?.title} &mdash;{" "}
            {selectedDate && formatDate(selectedDate)} at {selectedSlot}
          </p>

          <div className="space-y-4">
            {/* Name */}
            <div>
              <label
                htmlFor="book-name"
                className="block text-sm font-medium text-charcoal mb-1"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="book-name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleFormChange}
                disabled={submitting}
                className="w-full rounded-lg border border-border px-4 py-3 text-base text-charcoal placeholder:text-muted/60 focus:border-gold focus:ring-1 focus:ring-gold/40 outline-none transition-colors disabled:opacity-60"
                placeholder="Full name"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="book-phone"
                className="block text-sm font-medium text-charcoal mb-1"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                id="book-phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleFormChange}
                disabled={submitting}
                className="w-full rounded-lg border border-border px-4 py-3 text-base text-charcoal placeholder:text-muted/60 focus:border-gold focus:ring-1 focus:ring-gold/40 outline-none transition-colors disabled:opacity-60"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="book-email"
                className="block text-sm font-medium text-charcoal mb-1"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="book-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleFormChange}
                disabled={submitting}
                className="w-full rounded-lg border border-border px-4 py-3 text-base text-charcoal placeholder:text-muted/60 focus:border-gold focus:ring-1 focus:ring-gold/40 outline-none transition-colors disabled:opacity-60"
                placeholder="you@example.com"
              />
            </div>

            {/* Practice Area */}
            <div>
              <label
                htmlFor="book-area"
                className="block text-sm font-medium text-charcoal mb-1"
              >
                Practice Area <span className="text-red-500">*</span>
              </label>
              <select
                id="book-area"
                name="practiceArea"
                required
                value={formData.practiceArea}
                onChange={handleFormChange}
                disabled={submitting}
                className="w-full rounded-lg border border-border px-4 py-3 text-base text-charcoal focus:border-gold focus:ring-1 focus:ring-gold/40 outline-none transition-colors disabled:opacity-60 bg-white"
              >
                <option value="">Select practice area</option>
                {bookingConfig.practiceAreas.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
            </div>

            {/* Case Details */}
            <div>
              <label
                htmlFor="book-details"
                className="block text-sm font-medium text-charcoal mb-1"
              >
                Brief Case Details{" "}
                <span className="text-muted font-normal">(optional)</span>
              </label>
              <textarea
                id="book-details"
                name="caseDetails"
                rows={3}
                value={formData.caseDetails}
                onChange={handleFormChange}
                disabled={submitting}
                className="w-full rounded-lg border border-border px-4 py-3 text-base text-charcoal placeholder:text-muted/60 focus:border-gold focus:ring-1 focus:ring-gold/40 outline-none transition-colors resize-y disabled:opacity-60"
                placeholder="e.g., Property dispute with family member, Advice regarding FIR and bail, Divorce and custody guidance..."
              />
              <p className="text-xs text-muted mt-1">
                Please share a short summary. Avoid sending highly confidential
                information at this stage.
              </p>
            </div>

            {/* Preferred Language */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="book-lang"
                  className="block text-sm font-medium text-charcoal mb-1"
                >
                  Preferred Language
                </label>
                <select
                  id="book-lang"
                  name="language"
                  value={formData.language}
                  onChange={handleFormChange}
                  disabled={submitting}
                  className="w-full rounded-lg border border-border px-4 py-3 text-base text-charcoal focus:border-gold focus:ring-1 focus:ring-gold/40 outline-none transition-colors disabled:opacity-60 bg-white"
                >
                  <option value="">Any</option>
                  {bookingConfig.preferredLanguages.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="book-followup"
                  className="block text-sm font-medium text-charcoal mb-1"
                >
                  Follow-Up Preference
                </label>
                <select
                  id="book-followup"
                  name="followUp"
                  value={formData.followUp}
                  onChange={handleFormChange}
                  disabled={submitting}
                  className="w-full rounded-lg border border-border px-4 py-3 text-base text-charcoal focus:border-gold focus:ring-1 focus:ring-gold/40 outline-none transition-colors disabled:opacity-60 bg-white"
                >
                  <option value="">Any</option>
                  {bookingConfig.followUpModes.map((mode) => (
                    <option key={mode} value={mode}>
                      {mode}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Nav buttons */}
          <div className="flex gap-3 mt-8">
            <button
              type="button"
              onClick={() => setStep("datetime")}
              className="flex-1 rounded-lg border border-border py-3 text-sm font-semibold text-charcoal hover:bg-cream transition-colors"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="flex-1 rounded-lg bg-navy py-3 text-sm font-semibold text-white hover:bg-navy-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <span className="inline-flex items-center gap-2">
                  <svg
                    className="animate-spin h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Booking...
                </span>
              ) : (
                "Book Now"
              )}
            </button>
          </div>

          <p className="text-xs text-muted mt-4 text-center">
            Appointments are subject to availability and confirmation.
            Submitting this request does not create a lawyer-client
            relationship.
          </p>
        </form>
      )}
    </>
  );
}
