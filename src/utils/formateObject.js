let dataList = require("./data");

let data = dataList.data.adAdapter;

let noWantAdapter = {
	admob: {
		banner: {
			Tier2PageInUse: {
				attributes: "boolean_field",
				display_name: "Show Mediated Page",
				required: false,
				tip: "Show Mediated Page"
			},
			appid: {
				attributes: "id_field",
				display_name: "appid",
				required: true,
				tip: "appid",
				value: "test-by-zhangqiongyu111"
			},
			expireTime: {
				attributes: "number_field",
				display_name: "Ad Expire Time",
				required: false,
				tip: "Ad Expire Time",
				value: 3600
			},
			frequencyCap: {
				attributes: "number_field",
				display_name: "Max Request Count",
				required: false,
				tip: "Max Request Count",
				value: 100
			},
			frequencyTime: {
				attributes: "number_field",
				display_name: "Max Request Count Time",
				required: false,
				tip: "Max Request Count Time",
				value: 5
			},
			initsdkwhenstart: {
				attributes: "boolean_field",
				display_name: "initsdkwhenstart",
				required: false,
				tip: "initsdkwhenstart"
			},
			loadTimeOut: {
				attributes: "number_field",
				display_name: "loadTimeOut",
				required: false,
				tip: "loadTimeOut"
			},
			minShowTime: {
				attributes: "number_field",
				display_name: "minShowTime",
				required: false,
				tip: "minShowTime"
			}
		},
		interstitial: {
			Tier2PageInUse: {
				attributes: "boolean_field",
				display_name: "Show Mediated Page",
				required: false,
				tip: "Show Mediated Page"
			},
			appid: {
				attributes: "id_field",
				display_name: "appid",
				required: true,
				tip: "appid"
			},
			expireTime: {
				attributes: "number_field",
				display_name: "Ad Expire Time",
				required: false,
				tip: "Ad Expire Time"
			},
			frequencyCap: {
				attributes: "number_field",
				display_name: "Max Request Count",
				required: false,
				tip: "Max Request Count"
			},
			frequencyTime: {
				attributes: "number_field",
				display_name: "Max Request Count Time",
				required: false,
				tip: "Max Request Count Time"
			},
			initsdkwhenstart: {
				attributes: "boolean_field",
				display_name: "initsdkwhenstart",
				required: false,
				tip: "initsdkwhenstart"
			},
			loadTimeOut: {
				attributes: "number_field",
				display_name: "loadTimeOut",
				required: false,
				tip: "loadTimeOut"
			}
		},
		native: {
			Tier2PageInUse: {
				attributes: "boolean_field",
				display_name: "Show Mediated Page",
				required: false,
				tip: "Show Mediated Page"
			},
			appid: {
				attributes: "id_field",
				display_name: "appid",
				required: true,
				tip: "appid"
			},
			expireTime: {
				attributes: "number_field",
				display_name: "Ad Expire Time",
				required: false,
				tip: "Ad Expire Time"
			},
			frequencyCap: {
				attributes: "number_field",
				display_name: "Max Request Count",
				required: false,
				tip: "Max Request Count"
			},
			frequencyTime: {
				attributes: "number_field",
				display_name: "Max Request Count Time",
				required: false,
				tip: "Max Request Count Time"
			},
			initsdkwhenstart: {
				attributes: "boolean_field",
				display_name: "initsdkwhenstart",
				required: false,
				tip: "initsdkwhenstart"
			},
			loadTimeOut: {
				attributes: "number_field",
				display_name: "loadTimeOut",
				required: false,
				tip: "loadTimeOut"
			},
			minShowTime: {
				attributes: "number_field",
				display_name: "minShowTime",
				required: false,
				tip: "minShowTime"
			}
		}
	}
};

let wantArray = [
	{
		vendor: "",
		adType: "",
		requested: "",
		expireTime: "",
		frequencyCap: "",
		frequencyTime: "",
		status: ""
	},
	{
		vendor: "",
		adType: "",
		requested: "",
		expireTime: "",
		frequencyCap: "",
		frequencyTime: "",
		status: ""
	}
];

function _formate(obj) {
	let arr = [];
	Object.keys(obj).forEach(key0 => {
		let o = {};
		o.vendor = key0;
		Object.keys(obj[key0]).forEach(key1 => {
			o.adType = key1;
			arr.push({ ...o, ...obj[key0][key1] });
		});
	});
	return arr;
}

// console.log(_formate(data));

let so = {
	vendor: "admob",
	adType: "banner",
	requested: "c",
	expireTime: "c",
	frequencyCap: "c",
	frequencyTime: "c",
	status: "c"
};

let _so = { ...so };

delete _so.vendor;
delete _so.adType;

let sb = {
	[so.vendor]: {
		[so.adType]: {
			..._so
		}
	}
};

console.log(sb);
