import React from 'react'

function Curd() {
    return (
        <div className='container'>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add Recipe
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content text-black">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Add Recipe:</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form action="">
                                <label for="recipeName">Recipe Name:</label>
                                <input type="text" id="recipeName" className='form-control' required /><br />
                                <label for="recipeInstructions">Ingredients:</label>
                                <input type="text" id="recipeInstructions" className='form-control' required></input><br />
                                <label for="recipeImage">Image URL:</label>
                                <input type="text" id="recipeImage" className='form-control' /><br />
                                <button type="submit" id="saveBtn" className='btn btn-primary'>Update</button>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Curd
