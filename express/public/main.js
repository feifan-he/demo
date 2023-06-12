$(() => {
    tableBody = $('.page-counts').first()

    $.get('/visitedLinks').then((pageToCount) => {
        for (const [page, count] of Object.entries(pageToCount)) {
            tableBody.append(
                $(`<tr><td>${page}</td><td>${count}</td></tr>`)
            )
        }
    })
})


// the below 2 jquery methods are equivalent
// to loading the script at the bottom of html
// even when put it in <head>

// $(document).ready(() => {
// ...
// })

// $(() => {
// })
