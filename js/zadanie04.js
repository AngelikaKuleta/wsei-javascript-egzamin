let sampleClass = document.getElementsByClassName("sample_class");
getTagsOfElements = (elements) => {
    let tab = [];
    for(let i = 0; i < elements.length; i++) {
        tab.push(elements[i].tagName);
    }
    return tab
}
console.log(getTagsOfElements(sampleClass));

let sampleId = document.getElementById("sample_id");
getClassesOfElement = (elements) => {
    let tab = [...elements.classList];
    return tab
}
console.log(getClassesOfElement(sampleId));

const listElements = document.querySelectorAll('.sample_class_2 li');
getInnerTextsOfElements = (elements) => {
    let tab = [];
    elements.forEach(el => {
        tab.push(el.innerText);
    });
    return tab;
}

console.log(getInnerTextsOfElements(listElements));

const links = document.querySelectorAll('a');
getAddressesOfElements = (elements) => {
    let tab = [];
    elements.forEach(el => {
        tab.push(el.getAttribute('href'));
    });
    return tab;
}
console.log(getAddressesOfElements(links));

const children = document.querySelector('.sample_class_3').children;
console.log(getTagsOfElements(children));