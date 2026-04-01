import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";
import AboutPage from "@/app/about/page";
import CivilLawPage from "@/app/civil-law/page";
import CriminalLawPage from "@/app/criminal-law/page";
import MatrimonialLawPage from "@/app/matrimonial-law/page";
import TestimonialsPage from "@/app/testimonials/page";
import BookPage from "@/app/book/page";
import ContactPage from "@/app/contact/page";

// Mock next/link
jest.mock("next/link", () => {
  return function MockLink({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
    [key: string]: unknown;
  }) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  };
});

// Mock CalEmbed (loads external scripts)
jest.mock("@/components/CalEmbed", () => {
  return function MockCalEmbed() {
    return <div data-testid="cal-embed">Cal.com Embed</div>;
  };
});

// Mock ContactForm (uses client hooks)
jest.mock("@/components/ContactForm", () => {
  return function MockContactForm() {
    return <form data-testid="contact-form">Contact Form</form>;
  };
});

describe("HomePage", () => {
  beforeEach(() => {
    render(<HomePage />);
  });

  it("renders the hero heading", () => {
    expect(
      screen.getByText("Dedicated Legal Representation in Jammu")
    ).toBeInTheDocument();
  });

  it("has Call, WhatsApp, and Book CTAs in hero", () => {
    expect(screen.getAllByText(/Call Now/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("WhatsApp").length).toBeGreaterThanOrEqual(1);
    expect(
      screen.getAllByText(/Book a Consultation/).length
    ).toBeGreaterThanOrEqual(1);
  });

  it("shows practice area cards", () => {
    expect(screen.getByText("Civil Law")).toBeInTheDocument();
    expect(screen.getByText("Criminal Law")).toBeInTheDocument();
    expect(screen.getByText("Matrimonial Law")).toBeInTheDocument();
  });

  it("shows Google rating badge", () => {
    expect(screen.getAllByText("4.7").length).toBeGreaterThanOrEqual(1);
  });

  it("shows consultation fees in hero", () => {
    expect(screen.getAllByText(/₹2,000/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/₹5,000/).length).toBeGreaterThanOrEqual(1);
  });

  it("shows availability messaging", () => {
    expect(
      screen.getByText(/Evening consultations/)
    ).toBeInTheDocument();
  });

  it("has a final CTA section", () => {
    expect(
      screen.getByText("Facing a Legal Matter? Let Us Talk.")
    ).toBeInTheDocument();
  });
});

describe("AboutPage", () => {
  beforeEach(() => {
    render(<AboutPage />);
  });

  it("renders lawyer name", () => {
    expect(
      screen.getAllByText(/Amarvir Singh Manhas/).length
    ).toBeGreaterThanOrEqual(1);
  });

  it("has a mid-content CTA", () => {
    expect(
      screen.getByText("Want to Discuss Your Case?")
    ).toBeInTheDocument();
  });

  it("shows approach section", () => {
    expect(screen.getByText("Honest Advice")).toBeInTheDocument();
    expect(screen.getByText("Clear Communication")).toBeInTheDocument();
  });
});

describe("CivilLawPage", () => {
  beforeEach(() => {
    render(<CivilLawPage />);
  });

  it("renders civil law heading", () => {
    expect(
      screen.getByText("Civil Law Representation in Jammu")
    ).toBeInTheDocument();
  });

  it("has hero CTAs", () => {
    expect(screen.getAllByText(/Call Now/).length).toBeGreaterThanOrEqual(1);
    expect(
      screen.getAllByText(/Book a Consultation/).length
    ).toBeGreaterThanOrEqual(1);
  });

  it("shows fee note", () => {
    expect(screen.getByText(/Consultation from ₹2,000/)).toBeInTheDocument();
  });

  it("has mid-content CTA", () => {
    expect(
      screen.getByText("Need Legal Advice on a Civil Matter?")
    ).toBeInTheDocument();
  });

  it("shows sub-areas", () => {
    expect(screen.getByText("Property Disputes")).toBeInTheDocument();
    expect(screen.getByText("Consumer Disputes")).toBeInTheDocument();
  });
});

describe("CriminalLawPage", () => {
  beforeEach(() => {
    render(<CriminalLawPage />);
  });

  it("renders criminal law heading", () => {
    expect(
      screen.getByText("Criminal Law Representation in Jammu")
    ).toBeInTheDocument();
  });

  it("has urgency section with CTA button", () => {
    expect(
      screen.getByText(/Criminal Cases Are Time-Sensitive/)
    ).toBeInTheDocument();
    // The urgency section should have a Call Now button
    const urgencySection = screen
      .getByText(/Criminal Cases Are Time-Sensitive/)
      .closest("section");
    expect(urgencySection?.querySelector("a[href^='tel:']")).toBeTruthy();
  });

  it("has mid-content CTA", () => {
    expect(
      screen.getByText("Facing Criminal Charges? Do Not Delay.")
    ).toBeInTheDocument();
  });

  it("shows bail applications sub-area", () => {
    expect(screen.getByText("Bail Applications")).toBeInTheDocument();
  });
});

describe("MatrimonialLawPage", () => {
  beforeEach(() => {
    render(<MatrimonialLawPage />);
  });

  it("renders matrimonial law heading", () => {
    expect(
      screen.getByText(/Matrimonial.*Family Law Representation/)
    ).toBeInTheDocument();
  });

  it("has hero CTAs", () => {
    expect(screen.getAllByText(/Call Now/).length).toBeGreaterThanOrEqual(1);
  });

  it("shows fee and confidentiality note", () => {
    expect(
      screen.getByText(/Consultation from ₹2,000/)
    ).toBeInTheDocument();
  });

  it("has mid-content CTA", () => {
    expect(
      screen.getByText("Need Guidance on a Family Matter?")
    ).toBeInTheDocument();
  });

  it("shows divorce sub-area", () => {
    expect(screen.getByText("Divorce")).toBeInTheDocument();
  });
});

describe("TestimonialsPage", () => {
  beforeEach(() => {
    render(<TestimonialsPage />);
  });

  it("renders page heading", () => {
    expect(screen.getByText("What Clients Say")).toBeInTheDocument();
  });

  it("shows Google reviews", () => {
    expect(screen.getByText("Google Reviews")).toBeInTheDocument();
    expect(screen.getByText("Sumukh Khar")).toBeInTheDocument();
  });

  it("has mid-content CTA", () => {
    expect(
      screen.getByText("Ready to Experience the Same Level of Care?")
    ).toBeInTheDocument();
  });

  it("shows NRI note", () => {
    expect(
      screen.getByText(/NRI.*International Consultations/)
    ).toBeInTheDocument();
  });
});

describe("BookPage", () => {
  beforeEach(() => {
    render(<BookPage />);
  });

  it("renders booking heading", () => {
    expect(screen.getByText("Book a Consultation")).toBeInTheDocument();
  });

  it("shows Cal.com embed area", () => {
    expect(screen.getByTestId("cal-embed")).toBeInTheDocument();
  });

  it("shows office hours", () => {
    expect(screen.getByText("Office Hours")).toBeInTheDocument();
  });

  it("shows booking policy", () => {
    expect(screen.getByText("Policy")).toBeInTheDocument();
  });

  it("has fallback CTA", () => {
    expect(
      screen.getByText("Prefer to Speak First?")
    ).toBeInTheDocument();
  });
});

describe("ContactPage", () => {
  beforeEach(() => {
    render(<ContactPage />);
  });

  it("renders page heading", () => {
    expect(screen.getByText("Get in Touch")).toBeInTheDocument();
  });

  it("shows contact form", () => {
    expect(screen.getByTestId("contact-form")).toBeInTheDocument();
  });

  it("shows phone number", () => {
    expect(
      screen.getAllByText("+91 94190 00016").length
    ).toBeGreaterThanOrEqual(1);
  });

  it("shows email address", () => {
    expect(
      screen.getAllByText("bsmanhasassociates@gmail.com").length
    ).toBeGreaterThanOrEqual(1);
  });

  it("shows office address", () => {
    expect(
      screen.getAllByText(/19 A Bhawani Nagar/).length
    ).toBeGreaterThanOrEqual(1);
  });

  it("shows office hours", () => {
    expect(screen.getAllByText(/5:45 PM/).length).toBeGreaterThanOrEqual(1);
  });

  it("has Google Maps iframe", () => {
    const iframe = document.querySelector("iframe");
    expect(iframe).toBeTruthy();
    expect(iframe?.getAttribute("src")).toContain("google.com/maps");
  });

  it("has 'What Happens Next' section", () => {
    expect(screen.getByText("What Happens Next?")).toBeInTheDocument();
  });
});
