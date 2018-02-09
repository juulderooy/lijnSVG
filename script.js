let svgns = "http://www.w3.org/2000/svg";
let mijnSVG=document.createElementNS("http://www.w3.org/2000/svg", "svg");
for (let i = 0; i < 3; i ++) {
    let rect = document.createElementNS(svgns, 'rect');
    rect.setAttributeNS(null, 'x', i * 100);
    rect.setAttributeNS(null, 'y', 0);
    rect.setAttributeNS(null, 'height', '50');
    rect.setAttributeNS(null, 'width', '50');
    rect.setAttributeNS(null, 'fill', '#23dfaa');
    mijnSVG.appendChild(rect);
    document.getElementById('eenElement').appendChild(mijnSVG);
}

