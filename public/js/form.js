$(document).ready(function() {

var currentUrl = window.location.href;
console.log(currentUrl)

    $('#submitForm').on('click', function(event) {
        event.preventDefault();
        var a = $('#location').val();
        $.ajax({
            type: "GET",
            url: "http://www.mapquestapi.com/geocoding/v1/address?key=LIhb6pFxB7qAlFC4Aiul9rM9i7R5BcgB&location=" + a,
            beforeSend: function(xhr) {
                xhr.setRequestHeader("Accept", "application/json");
                xhr.setRequestHeader("Content-type", "application/json");
            },
            success: function postForm(response) {

                var lat = response.results[0].locations[0].latLng.lat;
                var lng = response.results[0].locations[0].latLng.lng;
                // Extract latitude and longitude
                $('#lat').val(lat);
                $('#lng').val(lng);

                $('#geoForm').submit();
            },
            error: function(status, error) {
                console.log(status)
                console.log(error)
            }
        });
    });

    // $('#radius').change(function(e) {
    //
    //     event.preventDefault();
    //     var location = $('#filterlocation').val();
    //     var rad = $('#radius').val();
    //     var keyword = $('#keyword').val();
    //
    //
    //     $.ajax({
    //         type: "GET",
    //         url: "http://www.mapquestapi.com/geocoding/v1/address?key=LIhb6pFxB7qAlFC4Aiul9rM9i7R5BcgB&location=" + location,
    //         beforeSend: function(xhr) {
    //             xhr.setRequestHeader("Accept", "application/json");
    //             xhr.setRequestHeader("Content-type", "application/json");
    //         },
    //         success: function postForm(response) {
    //
    //             var lat = response.results[0].locations[0].latLng.lat;
    //             var lng = response.results[0].locations[0].latLng.lng;
    //             // Extract latitude and longitude
    //             $('#filterLat').val(lat);
    //             $('#filterLng').val(lng);
    //             $('#searchForm').submit();
    //
    //             // window.location.href ="/search?keyword=" + keyword + "&location=" + location + "&lat=" + lat + "&lng=" + lng + "&rad=" + rad;
    //
    //
    //             // $('#geoForm').submit();
    //         },
    //         error: function(status, error) {
    //             console.log(status)
    //             console.log(error)
    //         }
    //     });
    // });
});
