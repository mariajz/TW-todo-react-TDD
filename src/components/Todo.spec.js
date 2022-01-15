import React from 'react';
import { render, screen } from '@testing-library/react';
import Todo from "../components/Todo";

    describe("Basic rendering of Todo component",()=>{

    it("Should render Todo component",()=>{
        render(<Todo />);   
    })

    it("Should render checkbox as checked",()=>{
        const { getByTestId } = render(<Todo/>);
        expect(getByTestId("cbCheckUncheck")).toBeChecked();    
    })

    it("Should render clickable edit button",()=>{
        const { getByTestId } = render(<Todo/>);
        expect(getByTestId("edit-button")).not.toHaveAttribute("disabled");
    })

    it("Should render clickable delete button",()=>{
        const { getByTestId } = render(<Todo/>);
        expect(getByTestId("delete-button")).not.toHaveAttribute("disabled");
    })
  })
  

  