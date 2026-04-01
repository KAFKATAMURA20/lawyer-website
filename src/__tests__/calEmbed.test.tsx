import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CalEmbed from "@/components/CalEmbed";

describe("CalEmbed", () => {
  it("shows 3 event type cards initially", () => {
    render(<CalEmbed />);
    expect(screen.getByText("Phone Consultation")).toBeInTheDocument();
    expect(screen.getByText("In-Office Consultation")).toBeInTheDocument();
    expect(screen.getByText("Video Consultation")).toBeInTheDocument();
  });

  it("displays fees on each card", () => {
    render(<CalEmbed />);
    expect(screen.getAllByText("₹2,000")).toHaveLength(2); // phone + video
    expect(screen.getByText("₹5,000")).toBeInTheDocument(); // in-office
  });

  it("displays durations on each card", () => {
    render(<CalEmbed />);
    expect(screen.getAllByText("10 min")).toHaveLength(2);
    expect(screen.getByText("30 min")).toBeInTheDocument();
  });

  it("shows Back button and selected info after clicking a card", async () => {
    const user = userEvent.setup();
    render(<CalEmbed />);

    await user.click(screen.getByText("Phone Consultation"));

    expect(screen.getByText("Back")).toBeInTheDocument();
    expect(screen.getByText(/Phone Consultation/)).toBeInTheDocument();
    expect(screen.getByText(/₹2,000/)).toBeInTheDocument();
  });

  it("returns to card picker when Back is clicked", async () => {
    const user = userEvent.setup();
    render(<CalEmbed />);

    // Click a card
    await user.click(screen.getByText("Phone Consultation"));
    expect(screen.getByText("Back")).toBeInTheDocument();

    // Click back
    await user.click(screen.getByText("Back"));
    expect(screen.getByText("Phone Consultation")).toBeInTheDocument();
    expect(screen.getByText("In-Office Consultation")).toBeInTheDocument();
    expect(screen.getByText("Video Consultation")).toBeInTheDocument();
  });

  it("can select a different card after going back", async () => {
    const user = userEvent.setup();
    render(<CalEmbed />);

    // Select phone
    await user.click(screen.getByText("Phone Consultation"));
    expect(screen.getByText(/Phone Consultation.*10 min/)).toBeInTheDocument();

    // Go back
    await user.click(screen.getByText("Back"));

    // Select in-office
    await user.click(screen.getByText("In-Office Consultation"));
    expect(screen.getByText(/In-Office Consultation.*30 min/)).toBeInTheDocument();
  });
});
