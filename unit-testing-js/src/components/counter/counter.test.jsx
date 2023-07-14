import Counter from "./counter";
import { render , screen } from "@testing-library/react"

describe(Counter, ()=>{

    it("Count display correct initial value", () => {
        //ARRANGE
            // const { getByTestId } = render(<Counter initialCount={0}></Counter>)
            // const countValue = getByTestId("count").textContent;
        //ACT


        //ASSERT - using JEST
        // expect(countValue).toBe(0);

    })

})