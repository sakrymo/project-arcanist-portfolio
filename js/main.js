const heading = document.querySelector('.fs-heading'),
      paragraph = document.querySelector('.fs-paragraph')

const fontsHeading = ['proxima-nova','Colus', 'trajan-sans-pro','nocturne-serif','hypatia-sans-pro','modestolite','cronos-pro','modesto-poster'],
      fontsParagraph = ['proxima-nova', 'futura-pt', 'gaultier', 'pt-sans-pro', 'cronos-pro','hypatia-sans-pro', 'nocturne-serif']

const hSamples = ['Lorem Ipsum Dolor Sit Amet', 'About Us', 'The Quick Brown Fox']
const pSamples = [`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vel arcu eleifend sagittis. Nullam finibus vulputate pharetra. Suspendisse eu bibendum tellus.

Integer ultrices libero non aliquam dapibus.Ut tempor urna erat, sit amet gravida leo euismod quis. Ut feugiat nisi non felis convallis, nec scelerisque justo varius. Nullam ut libero sit amet tellus pellentesque mollis. Mauris imperdiet quam ante, at varius arcu ultrices vel. Aliquam erat volutpat.

Vivamus accumsan sapien erat, sit amet interdum mauris semper lacinia. Donec non dolor nec diam semper congue. Fusce cursus feugiat dui et accumsan. Praesent finibus faucibus metus. Praesent gravida maximus arcu. Nulla auctor ex egestas tellus facilisis, imperdiet lacinia erat consectetur. Morbi vehicula, odio a pulvinar congue, elit massa egestas felis, id lacinia augue purus nec tellus.`,

"I'm baby hammock crucifix lyft cornhole ugh cloud bread tattooed fingerstache mumblecore iPhone artisan. Vexillologist mlkshk pork belly fam health goth bitters wolf whatever taxidermy helvetica selfies. Everyday carry normcore vape, neutra asymmetrical mustache salvia seitan heirloom put a bird on it. Pour-over distillery DIY, twee photo booth roof party church-key. Etsy woke intelligentsia cloud bread cronut chillwave ugh sustainable mumblecore swag.Keytar retro pok pok fixie polaroid, messenger bag intelligentsia lomo street art asymmetrical fashion axe man bun. Enamel pin hella four loko raclette, unicorn biodiesel lomo hot chicken jean shorts echo park messenger bag. Tumeric paleo polaroid locavore kogi you probably haven't heard of them kinfolk occupy pabst. Master cleanse hoodie franzen craft beer af fashion axe. Meh beard cred chartreuse pork belly blue bottle. Occupy neutra vaporware viral, literally chia coloring book DIY williamsburg asymmetrical seitan man bun aesthetic lumbersexual. Tumblr adaptogen truffaut waistcoat activated charcoal quinoa, coloring book pitchfork YOLO."]

let hFont = 0,
    hSize = 32,
    hWeight = 600,
    hTrack = 0,
    hUpper = false,
    hSample = 0;

let pFont = 0,
    pSize = 18,
    pWeight = 500,
    pTrack = 0,
    pLine = 1.35,
    pSample = 0;

updateEverything();

function updateEverything() {
  document.querySelector('.fs-h-font').textContent = "Font: " + fontsHeading[hFont];
  heading.style.fontFamily = fontsHeading[hFont]
  document.querySelector('.fs-h-size').textContent = "Size: " + hSize;
  heading.style.fontSize = hSize + "px";
  document.querySelector('.fs-h-weight').textContent = "Weight: " + hWeight;
  heading.style.fontWeight = hWeight;
  document.querySelector('.fs-h-track').textContent = "Tracking: " + hTrack.toFixed(2);
  heading.style.letterSpacing = hTrack + "em";
  document.querySelector('.fs-h-upper').textContent = "Uppercase: " + hUpper;
  heading.style.textTransform = hUpper ? "uppercase" : "inherit";
  document.querySelector('.checkbox').style.backgroundColor = hUpper ? 'green' : 'red';
  document.querySelector('.fs-h-sample').textContent = "Sample text: " + (hSample + 1);
  heading.textContent = hSamples[hSample];
  document.querySelector('.fs-p-font').textContent = "Font: " + fontsParagraph[pFont];
  paragraph.style.fontFamily = fontsParagraph[pFont];
  document.querySelector('.fs-p-size').textContent = "Size: " + pSize;
  paragraph.style.fontSize = pSize + "px";
  document.querySelector('.fs-p-weight').textContent = "Weight: " + pWeight;
  paragraph.style.fontWeight = pWeight;
  document.querySelector('.fs-p-track').textContent = "Tracking: " + pTrack.toFixed(2);
  paragraph.style.letterSpacing = pTrack + "em";
  document.querySelector('.fs-p-line').textContent = "Line height: " + pLine.toFixed(2);
  paragraph.style.lineHeight = pLine;
  document.querySelector('.fs-p-sample').textContent = "Sample text: " + (pSample + 1);
  paragraph.textContent = pSamples[pSample];
}

document.querySelector('.fs-h-font-left').addEventListener('click', e => {
  if (hFont > 0) hFont --;
  updateEverything();
})
document.querySelector('.fs-h-font-right').addEventListener('click', e => {
  if (hFont < fontsHeading.length-1) hFont ++;
  updateEverything();
})

document.querySelector('.fs-h-size-down').addEventListener('click', e => {
  if (hSize > 20) hSize -=2;
  updateEverything();
})
document.querySelector('.fs-h-size-up').addEventListener('click', e => {
  if (hSize < 100) hSize +=2;
  updateEverything();
})

document.querySelector('.fs-h-weight-down').addEventListener('click', e => {
  if (hWeight > 100) hWeight-=100;
  updateEverything();
})

document.querySelector('.fs-h-weight-up').addEventListener('click', e => {
  if (hWeight < 1200) hWeight+=100;
  updateEverything();
})

document.querySelector('.fs-h-track-down').addEventListener('click', e => {
  if (hTrack > 0) hTrack -= 0.01;
  updateEverything();
})

document.querySelector('.fs-h-track-up').addEventListener('click', e => {
  if (hTrack < 1) hTrack += 0.01;
  updateEverything();
})

document.querySelector('.fs-h-sample-left').addEventListener('click', e => {
  if (hSample > 0) hSample--;
  updateEverything();
});

document.querySelector('.fs-h-sample-right').addEventListener('click', e => {
  if (hSample < hSamples.length-1) hSample++;
  updateEverything();
})

document.querySelector('.fs-p-font-left').addEventListener('click', e => {
  if (pFont > 0) pFont--;
  updateEverything();
})

document.querySelector('.fs-p-size-down').addEventListener('click', e => {
  if (pSize > 16) pSize -=1;
  updateEverything();
})
document.querySelector('.fs-p-size-up').addEventListener('click', e => {
  if (pSize < 24) pSize +=1;
  updateEverything();
})

document.querySelector('.fs-p-weight-down').addEventListener('click', e => {
  if (pWeight > 100) pWeight-=100;
  updateEverything();
})

document.querySelector('.fs-p-weight-up').addEventListener('click', e => {
  if (pWeight < 1200) pWeight+=100;
  updateEverything();
})

document.querySelector('.fs-p-track-down').addEventListener('click', e => {
  if (pTrack > 0) pTrack -= 0.01;
  updateEverything();
})

document.querySelector('.fs-p-track-up').addEventListener('click', e => {
  if (pTrack < 1) pTrack += 0.01;
  updateEverything();
})

document.querySelector('.fs-p-line-down').addEventListener('click', e => {
  if (pLine > 1) pLine -=0.05;
  updateEverything();
})

document.querySelector('.fs-p-line-up').addEventListener('click', e => {
  if (pLine < 2) pLine +=0.05;
  updateEverything();
})


document.querySelector('.fs-p-font-right').addEventListener('click', e => {
  if (pFont < fontsParagraph.length-1) pFont++;
  updateEverything();
})

document.querySelector('.fs-p-sample-right').addEventListener('click', e => {
  if (pSample < pSamples.length-1) pSample++;
  updateEverything();
})

document.querySelector('.fs-p-sample-left').addEventListener('click', e => {
  if (pSample > 0) pSample--;
  updateEverything();
})

document.querySelector('.checkbox').addEventListener('click', e => { hUpper = !hUpper; updateEverything(); })