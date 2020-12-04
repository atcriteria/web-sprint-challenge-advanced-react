import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";
import { act } from "react-dom/test-utils";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);

    const header = screen.getByText("Checkout Form");
    // Console log verifies an H2 grabbed
    // console.log(header);

    expect(header).toBeInTheDocument();

    // This fails the test
    // expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", async() => {

    render(<CheckoutForm />);

    const firstName = screen.getByLabelText("First Name:");
    const lastName = screen.getByLabelText("Last Name:");
    const address = screen.getByLabelText("Address:");
    const city = screen.getByLabelText("City:");
    const state = screen.getByLabelText("State:");
    const zip = screen.getByLabelText("Zip:");
    const button = screen.getByRole("button");

    userEvent.type(firstName, "Bryce");
    userEvent.type(lastName, "Lipscomb");
    userEvent.type(address, "1111 Wayplace St");
    userEvent.type(city, "Richmond");
    userEvent.type(state, "VA");
    userEvent.type(zip, "23832");

    await act(async() => {
        userEvent.click(button);
    });

    // const successfulOrder = screen.getByRole("img");
    // expect(successfulOrder).toBeInTheDocument();

    const testID = screen.getByTestId("successMessage")
    expect(testID).toBeInTheDocument();

});
