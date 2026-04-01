import { render, screen } from "@testing-library/react";
import CTASection from "@/components/CTASection";
import GoogleRatingBadge from "@/components/GoogleRatingBadge";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import StickyMobileCTA from "@/components/StickyMobileCTA";

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

describe("CTASection", () => {
  it("renders with heading and body", () => {
    render(
      <CTASection heading="Test Heading" body="Test body text" />
    );
    expect(screen.getByText("Test Heading")).toBeInTheDocument();
    expect(screen.getByText("Test body text")).toBeInTheDocument();
  });

  it("renders Call, WhatsApp, and Book buttons", () => {
    render(
      <CTASection heading="Test" body="Test" />
    );
    expect(screen.getByText(/Call/)).toBeInTheDocument();
    expect(screen.getByText("WhatsApp")).toBeInTheDocument();
    expect(screen.getByText("Book a Consultation")).toBeInTheDocument();
  });

  it("Call button has correct phone link", () => {
    render(
      <CTASection heading="Test" body="Test" />
    );
    const callLink = screen.getByText(/Call/).closest("a");
    expect(callLink).toHaveAttribute("href", "tel:+919419000016");
  });

  it("WhatsApp button has correct link", () => {
    render(
      <CTASection heading="Test" body="Test" />
    );
    const waLink = screen.getByText("WhatsApp").closest("a");
    expect(waLink?.getAttribute("href")).toContain("wa.me");
  });

  it("Book button links to /book", () => {
    render(
      <CTASection heading="Test" body="Test" />
    );
    const bookLink = screen.getByText("Book a Consultation").closest("a");
    expect(bookLink).toHaveAttribute("href", "/book");
  });

  it("renders dark variant by default", () => {
    const { container } = render(
      <CTASection heading="Test" body="Test" />
    );
    expect(container.querySelector("section")).toHaveClass("bg-navy");
  });

  it("renders light variant when specified", () => {
    const { container } = render(
      <CTASection heading="Test" body="Test" variant="light" />
    );
    expect(container.querySelector("section")).toHaveClass("bg-cream");
  });
});

describe("GoogleRatingBadge", () => {
  it("renders rating and review count", () => {
    render(<GoogleRatingBadge />);
    expect(screen.getByText("4.7")).toBeInTheDocument();
    expect(screen.getByText("(11 reviews)")).toBeInTheDocument();
  });

  it("renders 5 star icons", () => {
    const { container } = render(<GoogleRatingBadge />);
    // Lucide Star icons render as SVGs
    const stars = container.querySelectorAll("svg.lucide-star");
    expect(stars).toHaveLength(5);
  });

  it("renders compact variant without border", () => {
    const { container } = render(<GoogleRatingBadge compact />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).not.toHaveClass("rounded-xl");
  });

  it("renders full variant with border", () => {
    const { container } = render(<GoogleRatingBadge />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveClass("rounded-xl");
  });
});

describe("FloatingWhatsApp", () => {
  it("renders a WhatsApp link", () => {
    render(<FloatingWhatsApp />);
    const link = screen.getByLabelText("Chat on WhatsApp");
    expect(link).toBeInTheDocument();
    expect(link.getAttribute("href")).toContain("wa.me");
  });

  it("opens in new tab", () => {
    render(<FloatingWhatsApp />);
    const link = screen.getByLabelText("Chat on WhatsApp");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("is hidden on mobile (md:flex)", () => {
    render(<FloatingWhatsApp />);
    const link = screen.getByLabelText("Chat on WhatsApp");
    expect(link).toHaveClass("hidden");
    expect(link).toHaveClass("md:flex");
  });
});

describe("StickyMobileCTA", () => {
  it("renders Call, WhatsApp, and Book buttons", () => {
    render(<StickyMobileCTA />);
    expect(screen.getByText("Call")).toBeInTheDocument();
    expect(screen.getByText("WhatsApp")).toBeInTheDocument();
    expect(screen.getByText("Book")).toBeInTheDocument();
  });

  it("Call button links to phone", () => {
    render(<StickyMobileCTA />);
    const callLink = screen.getByText("Call").closest("a");
    expect(callLink).toHaveAttribute("href", "tel:+919419000016");
  });

  it("Book button links to /book", () => {
    render(<StickyMobileCTA />);
    const bookLink = screen.getByText("Book").closest("a");
    expect(bookLink).toHaveAttribute("href", "/book");
  });

  it("is hidden on desktop (md:hidden)", () => {
    const { container } = render(<StickyMobileCTA />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveClass("md:hidden");
  });
});
