// @ts-check
/* eslint no-undef: 0 */
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "setup|draw|preload|recordFrame|recordSetup|p5Canvas0" }] */
// region SEC: Globals

let p5Canvas0;

// shaders
let JFAStrings, JFAShader;
// endregion
function preload() {
  JFAShader = loadShader('jfa.vert', 'jfa.frag');
}

function setup() {
  p5Canvas0 = createCanvas(300, 500, WEBGL);
  background(55);

  fill(0, 155, 10);
  shader(JFAShader);
  JFAShader.setUniform('u2_res', [width, height]);
  noStroke();
  quad(
    -width / 2,
    -height / 2,
    width / 2,
    -height / 2,
    width / 2,
    height / 2,
    -width / 2,
    height / 2
  );
}
function draw() {}
