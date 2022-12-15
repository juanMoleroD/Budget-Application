import React from "react";

const AddBudgetCategory = ({addBudgetCategory}) => {

    const handleSubmit = event => {
        event.preventDefault();
        const newCategory = {
            "name" : event.target.name.value,
            "budgeted" : parseFloat(event.target.budgeted.value)
        }
        addBudgetCategory(newCategory)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name"/>
                <label>Budgeted</label>
                <input type="text" name="budgeted"/>
                <input type="submit" value="add" />
            </form>
        </>
    );
}

export default AddBudgetCategory;