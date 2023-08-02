$(document).ready(function () {
    // Initialize wishlist array to store plant data
    var wishlist = [];

    // Function to add a plant to the wishlist
    function addPlantToWishlist(plant) {
        // Check if the wishlist is full (maximum 5 plants)
        if (wishlist.length >= 5) {
            alert("Your wishlist is full. Please remove a plant to add more.");
            return;
        }

        // Add plant data to the wishlist array
        wishlist.push(plant);

        // Update the table with the new plant data
        updateWishlistTable();
    }

    // Function to remove a plant from the wishlist
    function removePlantFromWishlist(index) {
        wishlist.splice(index, 1);
        updateWishlistTable();
    }

    // Function to update the wishlist table
    function updateWishlistTable() {
        var tableBody = $("#wishlist tbody");
        tableBody.empty(); // Clear existing table data

        // Loop through the wishlist array and add rows to the table
        for (var i = 0; i < wishlist.length; i++) {
            var plant = wishlist[i];
            var row = $("<tr>");

            // Add plant picture column
            var pictureCell = $("<td>").html(`<img src="${plant.picture}" alt="${plant.name}" width="100">`);
            row.append(pictureCell);

            // Add plant name column
            var nameCell = $("<td>").text(plant.name);
            row.append(nameCell);

            // Add remove option column
            var removeCell = $("<td>").html('<button class="remove-btn">-</button>');
            row.append(removeCell);

            // Attach event listener to remove button
            removeCell.find(".remove-btn").click(function () {
                var rowIndex = $(this).closest("tr").index();
                removePlantFromWishlist(rowIndex);
            });

            // Add the row to the table
            tableBody.append(row);
        }
    }

    // Example: Adding plants to the wishlist (up to 5 plants)
    addPlantToWishlist({ name: "Fikus Tree", picture: "plant1.png" });
    addPlantToWishlist({ name: "Plant 2", picture: "plant2.png" });
    

});