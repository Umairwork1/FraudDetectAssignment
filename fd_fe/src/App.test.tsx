import * as React from "react";
import { render, fireEvent, screen } from '@testing-library/react';
import TransactionContainer from '../src/components/TransactionContainer';

describe('TransactionContainer Component', () => {
    const transaction: {
        id: number;
        description: string;
        flagged: boolean;
        allowed: boolean;
        comments: string[];
        price: string;
    } = {
        id: 1,
        description: 'Sample Transaction',
        flagged: false,
        allowed: false,
        comments: [],
        price: '100',
    };
    it('renders transaction details correctly', () => {
        render(
            <TransactionContainer
                transaction={transaction}
                onFlagClick={() => {}}
                onAllowClick={() => {}}
            />
        );
        // Custom assertion function to check if an element exists
        const assertElementExists = (text: string) => {
            const element = screen.queryByText(text);
            expect(element).toBeInTheDocument();
        };

        // Use the custom assertion function
        assertElementExists('ID: 1');
        assertElementExists('Description Sample Transaction');
        assertElementExists('Price 100');

        // // Assert that the component renders the transaction details
        // expect(screen.getByText('ID: 1')).toBeInTheDocument();
        // expect(screen.getByText('Description Sample Transaction')).toBeInTheDocument();
        // expect(screen.getByText('Price 100')).toBeInTheDocument();
    });
it('calls onFlagClick when flag button is clicked', () => {
        const mockOnFlagClick = jest.fn();
        render(
            <TransactionContainer
                transaction={transaction}
                onFlagClick={mockOnFlagClick}
                onAllowClick={() => {}}
            />
        );
        const addFlagButton = screen.getByRole('button', { name: 'Add Flag' });

        // Simulate a click on the flag button
        fireEvent.click(addFlagButton);

        // Assert that the onFlagClick function was called
        expect(mockOnFlagClick).toHaveBeenCalled();
    })
})

