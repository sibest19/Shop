'use strict';

import mongoose from 'mongoose';

let FunctionSchema = new mongoose.Schema({
	func: { type: String, required: true, default: 'function() {return 0;}' },
}, {
	versionKey: false
});

export default mongoose.model('Func', FunctionSchema);
