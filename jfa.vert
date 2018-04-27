precision mediump float;
attribute vec3 aPosition;
uniform mat4 uProjectionMatrix;
uniform vec2 u2_res;
uniform mat4 uModelViewMatrix;
void main() {
  vec4 positionVec4 = vec4(aPosition, 1.0);
  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;
}