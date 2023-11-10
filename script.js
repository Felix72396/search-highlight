let text = document.getElementById("text");
let txt_search = document.getElementById("txt-search");
let btn_search = document.getElementById("btn-search");

const matchesSpan = document.getElementById("matches");

let regex = /<mark>|<\/mark>/g;

btn_search.addEventListener("click", ()=>{
    // alert(text.textContent)
    let finding_array = text.textContent.match(new RegExp(txt_search.value, "ig")) || [];
    matchesSpan.textContent = `Matches: ${finding_array.length}`;

    const resulting_finding_array = [...new Set(finding_array)].map(finding=>{
        return{
            element: finding
        }
    });

    text.innerHTML = text.innerHTML.replaceAll(regex, "");

    for (let index = 0; index < resulting_finding_array.length; index++) 
    {
        text.innerHTML = text.innerHTML.replaceAll(resulting_finding_array[index].element, `<mark>${resulting_finding_array[index].element}</mark>`);
    }
    // text.innerHTML = text.innerHTML.replaceAll(word, `<mark>${word}</mark>`);
});

// https://www.youtube.com/watch?v=cT7gyaEmGT4&ab_channel=CodingArtist