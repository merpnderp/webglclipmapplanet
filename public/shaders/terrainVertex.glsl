precision highp float;

uniform float uPhi;
uniform float uTheta;
uniform float uScale;


void main(){
	vPosition = uScale * position + vec3(uTileOffset, 0.0) + uGlobalOffset;

}
