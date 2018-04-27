precision mediump float;
uniform vec2 u2_res;

void main(){
  vec2 uv = (gl_FragCoord.xy - 0.5) / u2_res;
  gl_FragColor = vec4(uv,0.,1.);
}