import { siteData, consultationTypes, bookingConfig, googleReviews, testimonials } from "@/lib/siteData";

describe("siteData", () => {
  it("has valid firm and lawyer names", () => {
    expect(siteData.firmName).toBe("B S Manhas & Associates");
    expect(siteData.lawyerName).toContain("Manhas");
    expect(siteData.lawyerFullName).toBeTruthy();
  });

  it("has valid contact info (no placeholders)", () => {
    expect(siteData.email).not.toContain("[");
    expect(siteData.email).toContain("@");
    expect(siteData.emailLink).toContain("mailto:");
    expect(siteData.emailLink).not.toContain("[");
    expect(siteData.phone).toMatch(/^\+91/);
    expect(siteData.phoneLink).toMatch(/^tel:\+91/);
    expect(siteData.whatsapp).toMatch(/^\+91/);
    expect(siteData.whatsappLink).toContain("wa.me");
  });

  it("has valid address fields", () => {
    expect(siteData.address.line1).toBeTruthy();
    expect(siteData.address.city).toBe("Jammu");
    expect(siteData.address.state).toContain("Jammu");
    expect(siteData.address.pin).toMatch(/^\d{6}$/);
  });

  it("has valid office hours", () => {
    expect(siteData.hours.monday).toBeTruthy();
    expect(siteData.hours.tuesdayToSaturday).toBeTruthy();
    expect(siteData.hours.sunday).toBe("Closed");
  });

  it("has at least 2 courts listed", () => {
    expect(siteData.courts.length).toBeGreaterThanOrEqual(2);
    expect(siteData.courts).toContain("District Court, Jammu");
  });

  it("has at least 2 languages", () => {
    expect(siteData.languages.length).toBeGreaterThanOrEqual(2);
    expect(siteData.languages).toContain("English");
    expect(siteData.languages).toContain("Hindi");
  });
});

describe("consultationTypes", () => {
  it("has exactly 3 consultation types", () => {
    expect(consultationTypes).toHaveLength(3);
  });

  it("each type has required fields", () => {
    consultationTypes.forEach((ct) => {
      expect(ct.id).toBeTruthy();
      expect(ct.title).toBeTruthy();
      expect(ct.duration).toBeTruthy();
      expect(ct.mode).toBeTruthy();
      expect(ct.fee).toBeTruthy();
      expect(ct.fee).toContain("₹");
    });
  });

  it("has phone, in-office, and video types", () => {
    const ids = consultationTypes.map((ct) => ct.id);
    expect(ids).toContain("phone-10");
    expect(ids).toContain("in-office");
    expect(ids).toContain("tele-video");
  });

  it("phone and video are 10 min, in-office is 30 min", () => {
    const phone = consultationTypes.find((ct) => ct.id === "phone-10");
    const office = consultationTypes.find((ct) => ct.id === "in-office");
    const video = consultationTypes.find((ct) => ct.id === "tele-video");
    expect(phone?.duration).toContain("10");
    expect(office?.duration).toContain("30");
    expect(video?.duration).toContain("10");
  });
});

describe("bookingConfig", () => {
  it("has valid slot times", () => {
    expect(bookingConfig.slotStart).toBe(18);
    expect(bookingConfig.slotEnd).toBe(21);
    expect(bookingConfig.mondayStart).toBe(17.75);
  });

  it("Sunday is closed", () => {
    expect(bookingConfig.closedDays).toContain(0);
  });

  it("has 3 practice areas", () => {
    expect(bookingConfig.practiceAreas).toHaveLength(3);
  });
});

describe("googleReviews", () => {
  it("has a valid rating", () => {
    expect(googleReviews.rating).toBeGreaterThanOrEqual(1);
    expect(googleReviews.rating).toBeLessThanOrEqual(5);
  });

  it("has at least 5 reviews", () => {
    expect(googleReviews.reviews.length).toBeGreaterThanOrEqual(5);
  });

  it("totalReviews matches or exceeds reviews array", () => {
    expect(googleReviews.totalReviews).toBeGreaterThanOrEqual(googleReviews.reviews.length);
  });

  it("each review has name and rating", () => {
    googleReviews.reviews.forEach((r) => {
      expect(r.name).toBeTruthy();
      expect(r.rating).toBeGreaterThanOrEqual(1);
      expect(r.rating).toBeLessThanOrEqual(5);
    });
  });
});

describe("testimonials", () => {
  it("has at least 3 testimonials", () => {
    expect(testimonials.length).toBeGreaterThanOrEqual(3);
  });

  it("each testimonial has quote, name, and practiceArea", () => {
    testimonials.forEach((t) => {
      expect(t.quote).toBeTruthy();
      expect(t.name).toBeTruthy();
      expect(t.practiceArea).toBeTruthy();
    });
  });
});
