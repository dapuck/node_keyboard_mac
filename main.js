var objc = require('NodObjC');
    objc.import('CoreGraphics');
	//objc.import('ApplicationServices');
    //objc.import('AppKit');

var evtSource = objc.CGEventSourceCreate(objc.kCGEventSourceStateHIDSystemState);

function keyDown(code) {
	var evt = objc.CGEventCreateKeyboardEvent(evtSource,code,true);
	objc.CGEventPost(objc.kCGHIDEventTap, evt);
}

function keyUp(code) {
	var evt = objc.CGEventCreateKeyboardEvent(evtSource,code,false);
	objc.CGEventPost(objc.kCGHIDEventTap, evt);
}

module.exports = {
    "keyDown": keyDown,
    "keyUp": keyUp
}
