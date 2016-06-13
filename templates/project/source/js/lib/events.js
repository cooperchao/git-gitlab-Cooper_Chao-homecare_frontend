data_events =
[
	{
		className: ['eventTask','attendant01','case01'],
		lone_care: 'SL12345678',
		case_name: '曹爺爺',
		case_phone: ['0912-345-678','0988-888-888'],
		eme_name: '王先生',
		eme_phone: '0988-888-888',
		eme: [
			{
				name: '王大明',
				cognate: '父子',
				phone: '0988-888-888'
			},
			{
				name: '王小明',
				cognate: '兄弟',
				phone: '02-1234-5678'
			}
		],
		cost_type: '補助/自費',
		admin_pp: '計次/不計次',
		drive_pp: '計次/不計次',
		start: '2016-06-13T07:10:00',
		end: '2016-06-13T08:40:00',
		taskCycle: '連續至結案',
		taskItem: '整理家務/帶出門看醫生/陪聊天散步/菜煮飯打掃/洗澡',
		miss_status: ['個案不受服務','個案不在家','未遇到個案'],
		wai_name: '居服員01',
		wai: [
			// 依arrive & leave_token判別使用簽到方式，(1)電子簽名(2)QRCode(0)預設為空
			{
				name: '居服員01',
				arrive: '07:00',
				leave: '08:40',
				arrive_sign: 'http://www.ezhoca.com/img/logo_shuttle.svg',
				arrive_qr: '',
				leave_sign: 'http://www.ezhoca.com/img/logo_shuttle.svg',
				leave_qr: '',
				arrive_token: 1,
				leave_token: 2
			},
			{
				name: '居服員02',
				arrive: '07:00',
				leave: '08:40',
				arrive_sign: 'http://www.ezhoca.com/img/logo_shuttle.svg',
				arrive_qr: '',
				leave_sign: '',
				leave_qr: '',
				arrive_token: 2,
				leave_token: 0
			},
			{
				name: '居服員03',
				arrive: '07:00',
				leave: '08:40',
				arrive_sign: '',
				arrive_qr: '',
				leave_sign: '',
				leave_qr: '',
				arrive_token: 0,
				leave_token: 0
			}
		],
		checkin: [
			{
				distance: '',
				maps: '',
			}
		],
		war_name: '督導員',
		e_sign: '',
		task_note: '內容文字',
		miss_pay: '',
		miss_subsidy: '',
		miss_note: 'miss_note',
	},
	{
		className: ['eventTask','attendant01','attendant02','attendant03','case01','task_miss'],
		lone_care: 'SL12345678',
		case_name: '曹爺爺',
		case_phone: ['0912-345-678','02-1234-5678'],
		eme_name: '王先生',
		eme_phone: '0988-888-888',
		eme: [
			{
				name: '王大明',
				cognate: '父子',
				phone: '0988-888-888'
			},
			{
				name: '王小明',
				cognate: '兄弟',
				phone: '02-1234-5678'
			}
		],
		cost_type: '補助/自費',
		admin_pp: '計次/不計次',
		drive_pp: '計次/不計次',
		start: '2016-06-15T07:10:00',
		end: '2016-06-15T08:40:00',
		taskCycle: '連續至結案',
		taskItem: '整理家務/帶出門看醫生/陪聊天散步/菜煮飯打掃/洗澡',
		wai_name: '居服員02',
		wai: [
			{
				name: '居服員01',
				arrive: '--------',
				leave: '12:35',
				arrive_sign: '',
				arrive_qr: '',
				leave_sign: 'http://www.ezhoca.com/img/logo_shuttle.svg',
				leave_qr: '',
				arrive_token: 0,
				leave_token: 1,
			},
			{
				name: '居服員02',
				arrive: '08:15',
				leave: '12:35',
				arrive_sign: '',
				arrive_qr: '',
				leave_sign: '',
				leave_qr: '',
				arrive_token: 2,
				leave_token: 0,
			}
		],
		checkin: [
			{
				distance: '120公尺',
				maps: 'https://goo.gl/qg8muj',
			}
		],
		war_name: '督導員',
		e_sign: 'http://www.ezhoca.com/img/logo_shuttle.svg',
		task_note: '內容文字',
		miss_status: ['個案不受服務','個案不在家','未遇到個案'],
		miss_pay: '',
		miss_subsidy: '',
		miss_note: 'miss_note',
	},
	{
		className: ['eventTask','attendant06','case02','task_continue'],
		lone_care: 'SL12345678',
		case_name: '張爺爺',
		case_phone: ['0912-345-678'],
		eme_name: '王先生',
		eme_phone: '0988-888-888',
		eme: [
			{
				name: '王大明',
				cognate: '父子',
				phone: '0988-888-888',
			},
			{
				name: '王小明',
				cognate: '兄弟',
				phone: '02-1234-5678'
			}
		],
		cost_type: '補助/自費',
		admin_pp: '計次/不計次',
		drive_pp: '計次/不計次',
		start: '2016-06-14T08:00:00',
		end: '2016-06-14T09:30:00',
		taskCycle: '連續至結案',
		taskItem: '整理家務/帶出門看醫生/陪聊天散步/菜煮飯打掃/洗澡',
		wai_name: '居服員06',
		wai: [
			{
				name: '居服員06',
				arrive: '--------',
				leave: '--------',
				arrive_sign: '',
				arrive_qr: '',
				leave_sign: '',
				leave_qr: '',
				arrive_token: 0,
				leave_token: 0,
			}
		],
		checkin: [
			{
				distance: '30公尺',
				maps: 'https://goo.gl/qg8muj',
			}
		],
		war_name: '督導員',
		e_sign: 'http://www.ezhoca.com/img/logo_shuttle.svg',
		task_note: '內容文字',
		miss_status: ['個案不受服務','個案不在家','未遇到個案'],
		miss_pay: '',
		miss_subsidy: '',
		miss_note: 'miss_note',
	},
	{
		className: ['eventTask','attendant03','attendant06','case03','task_punch'],
		lone_care: 'SL12345678',
		case_name: '張奶奶',
		case_phone: ['0912-345-678','02-882-5252'],
		eme_name: '王先生',
		eme_phone: '0988-888-888',
		eme: [
			{
				name: '王大明',
				cognate: '父子',
				phone: '0988-888-888'
			},
			{
				name: '王小明',
				cognate: '兄弟',
				phone: '02-1234-5678'
			}
		],
		cost_type: '補助/自費',
		admin_pp: '計次/不計次',
		drive_pp: '計次/不計次',
		start: '2016-06-14T07:50:00',
		end: '2016-06-14T10:20:00',
		taskCycle: '連續至結案',
		taskItem: '整理家務/帶出門看醫生/陪聊天散步/菜煮飯打掃/洗澡',
		wai_name: '居服員03',
		wai: [
			{
				name: '居服員03',
				arrive: '08:20',
				leave: '12:35',
				arrive_sign: '',
				arrive_qr: '',
				leave_sign: '',
				leave_qr: '',
				arrive_token: 2,
				leave_token: 2,
			},
			{
				name: '居服員06',
				arrive: '08:15',
				leave: '12:35',
				arrive_sign: '',
				arrive_qr: '',
				leave_sign: '',
				leave_qr: '',
				arrive_token: 2,
				leave_token: 2,
			},
		],
		checkin: [
			{
				distance: '',
				maps: '',
			}
		],
		war_name: '督導員',
		e_sign: '',
		task_note: '內容文字',
		miss_status: ['個案不受服務','個案不在家','未遇到個案'],
		miss_pay: '',
		miss_subsidy: '',
		miss_note: 'miss_note',
	},
	{
		className: ['eventTask','attendant02','case04','wai_yet'],
		lone_care: 'SL12345678',
		case_name: '黃王奶奶',
		case_phone: ['0912-345-678'],
		eme_name: '王先生',
		eme_phone: '0988-888-888',
		eme: [
			{
				name: '王大明',
				cognate: '父子',
				phone: '0988-888-888',
			},
			{
				name: '王小明',
				cognate: '兄弟',
				phone: '02-1234-5678'
			}
		],
		cost_type: '補助/自費',
		admin_pp: '計次/不計次',
		drive_pp: '計次/不計次',
		start: '2016-06-15T10:40:00',
		end: '2016-06-15T12:10:00',
		taskCycle: '連續至結案',
		taskItem: '整理家務/帶出門看醫生/陪聊天散步/菜煮飯打掃/洗澡',
		wai_name: '居服員02',
		wai: [
			{
				name: '居服員02',
				arrive: '08:15',
				leave: '12:35',
				arrive_sign: '',
				arrive_qr: '',
				leave_sign: '',
				leave_qr: '',
				arrive_token: 2,
				leave_token: 2,
			},
		],
		checkin: [
			{
				distance: '50公尺',
				maps: 'https://goo.gl/qg8muj',
			}
		],
		war_name: '督導員',
		e_sign: 'http://www.ezhoca.com/img/logo_shuttle.svg',
		task_note: '內容文字',
		miss_status: ['個案不受服務','個案不在家','未遇到個案'],
		miss_pay: '',
		miss_subsidy: '',
		miss_note: 'miss_note',
	},
	{
		className: ['eventTask','attendant02','case05','gps_err'],
		lone_care: 'SL12345678',
		case_name: '江爺爺',
		case_phone: ['0912-345-678','0935-345-678'],
		eme_name: '王先生',
		eme_phone: '0988-888-888',
		eme: [
			{
				name: '王大明',
				cognate: '父子',
				phone: '0988-888-888'
			},
			{
				name: '王小明',
				cognate: '兄弟',
				phone: '02-1234-5678'
			}
		],
		cost_type: '補助/自費',
		admin_pp: '計次/不計次',
		drive_pp: '計次/不計次',
		start: '2016-06-16T11:45:00',
		end: '2016-06-16T12:45:00',
		taskCycle: '連續至結案',
		taskItem: '整理家務/帶出門看醫生/陪聊天散步/菜煮飯打掃/洗澡',
		wai_name: '居服員08',
		wai: [
			{
				name: '居服員08',
				arrive: '08:20',
				leave: '12:35',
				arrive_sign: '',
				arrive_qr: '',
				leave_sign: '',
				leave_qr: '',
				arrive_token: 2,
				leave_token: 2,
			},
		],
		checkin: [
			{
				distance: '20公尺',
				maps: 'https://goo.gl/qg8muj',
			}
		],
		war_name: '督導員',
		e_sign: 'http://www.ezhoca.com/img/logo_shuttle.svg',
		task_note: '內容文字',
		miss_status: ['個案不受服務','個案不在家','未遇到個案'],
		miss_pay: '',
		miss_subsidy: '',
		miss_note: 'miss_note',
	},
	{
		className: ['eventTask','attendant02','case04'],
		lone_care: 'SL12345678',
		case_name: '黃王奶奶',
		case_phone: ['0912-345-678'],
		eme_name: '王先生',
		eme_phone: '0988-888-888',
		eme: [
			{
				name: '王大明',
				cognate: '父子',
				phone: '0988-888-888'
			},
			{
				name: '王小明',
				cognate: '兄弟',
				phone: '02-1234-5678'
			}
		],
		cost_type: '補助/自費',
		admin_pp: '計次/不計次',
		drive_pp: '計次/不計次',
		start: '2016-06-16T09:00:00',
		end: '2016-06-16T10:00:00',
		taskCycle: '連續至結案',
		taskItem: '整理家務/帶出門看醫生/陪聊天散步/菜煮飯打掃/洗澡',
		wai_name: '居服員02',
		wai: [
			{
				name: '居服員02',
				arrive: '08:20',
				leave: '12:35',
				arrive_sign: '',
				arrive_qr: '',
				leave_sign: '',
				leave_qr: '',
				arrive_token: 2,
				leave_token: 2,
			},
		],
		checkin: [
			{
				distance: '15公尺',
				maps: 'https://goo.gl/qg8muj',
			}
		],
		war_name: '督導員',
		e_sign: 'http://www.ezhoca.com/img/logo_shuttle.svg',
		task_note: '內容文字',
		miss_status: ['個案不受服務','個案不在家','未遇到個案'],
		miss_pay: '',
		miss_subsidy: '',
		miss_note: 'miss_note',
	},
	{
		className: ['eventTask','attendant03','case04'],
		lone_care: 'SL12345678',
		case_name: '黃王奶奶',
		case_phone: ['0912-345-678'],
		eme_name: '王先生',
		eme_phone: '0988-888-888',
		eme: [
			{
				name: '王大明',
				cognate: '父子',
				phone: '0988-888-888'
			},
			{
				name: '王小明',
				cognate: '兄弟',
				phone: '02-1234-5678'
			}
		],
		cost_type: '補助/自費',
		admin_pp: '計次/不計次',
		drive_pp: '計次/不計次',
		start: '2016-06-16T10:50:00',
		end: '2016-06-16T12:20:00',
		taskCycle: '連續至結案',
		taskItem: '整理家務/帶出門看醫生/陪聊天散步/菜煮飯打掃/洗澡',
		wai_name: '居服員03',
		wai: [
			{
				name: '居服員03',
				arrive: '08:20',
				leave: '12:35',
				arrive_sign: '',
				arrive_qr: '',
				leave_sign: '',
				leave_qr: '',
				arrive_token: 2,
				leave_token: 2,
			},
		],
		checkin: [
			{
				distance: '30公尺',
				maps: 'https://goo.gl/qg8muj',
			}
		],
		war_name: '督導員',
		e_sign: '',
		task_note: '內容文字',
		miss_status: ['個案不受服務','個案不在家','未遇到個案'],
		miss_pay: '',
		miss_subsidy: '',
		miss_note: 'miss_note',
	},
	{
		className: ['eventTask','attendant02','case05'],
		lone_care: 'SL12345678',
		case_name: '江爺爺',
		case_phone: ['0912-345-678'],
		eme_name: '王先生',
		eme_phone: '0988-888-888',
		eme: [
			{
				name: '王大明',
				cognate: '父子',
				phone: '0988-888-888'
			},
			{
				name: '王小明',
				cognate: '兄弟',
				phone: '02-1234-5678'
			}
		],
		cost_type: '補助/自費',
		admin_pp: '計次/不計次',
		drive_pp: '計次/不計次',
		start: '2016-06-16T12:25:00',
		end: '2016-06-16T13:25:00',
		taskCycle: '連續至結案',
		taskItem: '整理家務/帶出門看醫生/陪聊天散步/菜煮飯打掃/洗澡',
		wai_name: '居服員02',
		wai: [
			{
				name: '居服員02',
				arrive: '08:20',
				leave: '12:35',
				arrive_sign: '',
				arrive_qr: '',
				leave_sign: '',
				leave_qr: '',
				arrive_token: 2,
				leave_token: 2,
			},
		],
		checkin: [
			{
				distance: '10公尺',
				maps: 'https://goo.gl/qg8muj',
			}
		],
		war_name: '督導員',
		e_sign: 'http://www.ezhoca.com/img/logo_shuttle.svg',
		task_note: '內容文字',
		miss_status: ['個案不受服務','個案不在家','未遇到個案'],
		miss_pay: '',
		miss_subsidy: '',
		miss_note: 'miss_note',
	},
	{
		className: ['eventTask','attendant03','case01'],
		lone_care: 'SL12345678',
		case_name: '曹爺爺',
		case_phone: ['0912-345-678'],
		eme_name: '王先生',
		eme_phone: '0988-888-888',
		eme: [
			{
				name: '王大明',
				cognate: '父子',
				phone: '0988-888-888'
			},
			{
				name: '王小明',
				cognate: '兄弟',
				phone: '02-1234-5678'
			}
		],
		cost_type: '補助/自費',
		admin_pp: '計次/不計次',
		drive_pp: '計次/不計次',
		start: '2016-06-17T12:25:00',
		end: '2016-06-17T13:25:00',
		taskCycle: '連續至結案',
		taskItem: '整理家務/帶出門看醫生/陪聊天散步/菜煮飯打掃/洗澡',
		wai_name: '居服員03',
		wai: [
			{
				name: '居服員03',
				arrive: '08:20',
				leave: '12:35',
				arrive_sign: '',
				arrive_qr: '',
				leave_sign: '',
				leave_qr: '',
				arrive_token: 2,
				leave_token: 2,
			},
		],
		checkin: [
			{
				distance: '130公尺',
				maps: 'https://goo.gl/qg8muj',
			}
		],
		war_name: '督導員',
		e_sign: 'http://www.ezhoca.com/img/logo_shuttle.svg',
		task_note: '內容文字',
		miss_status: ['個案不受服務','個案不在家','未遇到個案'],
		miss_pay: '',
		miss_subsidy: '',
		miss_note: 'miss_note',
	},
	{
		className: ['eventTask','attendant01','case05'],
		lone_care: 'SL12345678',
		case_name: '江爺爺',
		case_phone: ['0912-345-678'],
		eme_name: '王先生',
		eme_phone: '0988-888-888',
		eme: [
			{
				name: '王大明',
				cognate: '父子',
				phone: '0988-888-888'
			},
			{
				name: '王小明',
				cognate: '兄弟',
				phone: '02-1234-5678'
			}
		],
		cost_type: '補助/自費',
		admin_pp: '計次/不計次',
		drive_pp: '計次/不計次',
		start: '2016-06-17T07:00:00',
		end: '2016-06-17T09:30:00',
		taskCycle: '連續至結案',
		taskItem: '整理家務/帶出門看醫生/陪聊天散步/菜煮飯打掃/洗澡',
		wai_name: '居服員01',
		wai: [
			{
				name: '居服員01',
				arrive: '08:20',
				leave: '12:35',
				arrive_sign: '',
				arrive_qr: '',
				leave_sign: '',
				leave_qr: '',
				arrive_token: 2,
				leave_token: 2,
			},
		],
		checkin: [
			{
				distance: '333公尺',
				maps: 'https://goo.gl/qg8muj',
			}
		],
		war_name: '督導員',
		e_sign: '',
		task_note: '內容文字',
		miss_status: ['個案不受服務','個案不在家','未遇到個案'],
		miss_pay: '',
		miss_subsidy: '',
		miss_note: 'miss_note',
	},
	{
		className: ['eventTask','attendant02','case05'],
		lone_care: 'SL12345678',
		case_name: '江爺爺',
		case_phone: ['0912-345-678'],
		eme_name: '王先生',
		eme_phone: '0988-888-888',
		eme: [
			{
				name: '王大明',
				cognate: '父子',
				phone: '0988-888-888'
			},
			{
				name: '王小明',
				cognate: '兄弟',
				phone: '02-1234-5678'
			}
		],
		cost_type: '補助/自費',
		admin_pp: '計次/不計次',
		drive_pp: '計次/不計次',
		start: '2016-06-18T11:40:00',
		end: '2016-06-18T12:40:00',
		taskCycle: '連續至結案',
		taskItem: '整理家務/帶出門看醫生/陪聊天散步/菜煮飯打掃/洗澡',
		wai_name: '居服員02',
		wai: [
			{
				name: '居服員02',
				arrive: '08:20',
				leave: '12:35',
				arrive_sign: '',
				arrive_qr: '',
				leave_sign: 'http://www.ezhoca.com/img/logo_shuttle.svg',
				leave_qr: '',
				arrive_token: 2,
				leave_token: 1,
			},
		],
		checkin: [
			{
				distance: '11公尺',
				maps: 'https://goo.gl/qg8muj',
			}
		],
		war_name: '督導員',
		e_sign: 'http://www.ezhoca.com/img/logo_shuttle.svg',
		task_note: '內容文字',
		miss_status: ['個案不受服務','個案不在家','未遇到個案'],
		miss_pay: '',
		miss_subsidy: '',
		miss_note: 'miss_note',
	},
	{
		className: ['eventTask','attendant03','case01'],
		lone_care: 'SL12345678',
		case_name: '曹爺爺',
		case_phone: ['0912-345-678'],
		eme_name: '王先生',
		eme_phone: '0988-888-888',
		eme: [
			{
				name: '王大明',
				cognate: '父子',
				phone: '0988-888-888'
			},
			{
				name: '王小明',
				cognate: '兄弟',
				phone: '02-1234-5678'
			}
		],
		cost_type: '補助/自費',
		admin_pp: '計次/不計次',
		drive_pp: '計次/不計次',
		start: '2016-06-18T12:45:00',
		end: '2016-06-18T13:15:00',
		taskCycle: '連續至結案',
		taskItem: '整理家務/帶出門看醫生/陪聊天散步/菜煮飯打掃/洗澡',
		wai_name: '居服員03',
		wai: [
			{
				name: '居服員03',
				arrive: '08:20',
				leave: '12:35',
				arrive_sign: 'http://www.ezhoca.com/img/logo_shuttle.svg',
				arrive_qr: '',
				leave_sign: '',
				leave_qr: '',
				arrive_token: 1,
				leave_token: 2,
			},
		],
		checkin: [
			{
				distance: '30公尺',
				maps: 'https://goo.gl/qg8muj',
			}
		],
		war_name: '督導員',
		e_sign: '',
		task_note: '內容文字',
		miss_status: ['個案不受服務','個案不在家','未遇到個案'],
		miss_pay: '',
		miss_subsidy: '',
		miss_note: 'miss_note',
	},
	{
		className: ['eventTask','attendant01','case03'],
		lone_care: 'SL12345678',
		case_name: '張奶奶',
		case_phone: ['0912-345-678'],
		eme_name: '王先生',
		eme_phone: '0988-888-888',
		eme: [
			{
				name: '王大明',
				cognate: '父子',
				phone: '0988-888-888'
			},
			{
				name: '王小明',
				cognate: '兄弟',
				phone: '02-1234-5678'
			}
		],
		cost_type: '補助/自費',
		admin_pp: '計次/不計次',
		drive_pp: '計次/不計次',
		start: '2016-06-18T07:15:00',
		end: '2016-06-18T08:45:00',
		taskCycle: '連續至結案',
		taskItem: '整理家務/帶出門看醫生/陪聊天散步/菜煮飯打掃/洗澡',
		wai_name: '居服員01',
		wai: [
			{
				name: '居服員01',
				arrive: '08:20',
				leave: '12:35',
				arrive_sign: '',
				arrive_qr: '',
				leave_sign: '',
				leave_qr: '',
				arrive_token: 2,
				leave_token: 0,
			},
		],
		checkin: [
			{
				distance: '6公尺',
				maps: 'https://goo.gl/qg8muj',
			}
		],
		war_name: '督導員',
		e_sign: 'http://www.ezhoca.com/img/logo_shuttle.svg',
		task_note: '內容文字',
		miss_status: ['個案不受服務','個案不在家','未遇到個案'],
		miss_pay: '',
		miss_subsidy: '',
		miss_note: 'miss_note',
	},
	{
		className: ['eventTask','attendant03','case02'],
		lone_care: 'SL12345678',
		case_name: '張爺爺',
		case_phone: ['0912-345-678'],
		eme_name: '王先生',
		eme_phone: '0988-888-888',
		eme: [
			{
				name: '王大明',
				cognate: '父子',
				phone: '0988-888-888'
			},
			{
				name: '王小明',
				cognate: '兄弟',
				phone: '02-1234-5678'
			}
		],
		cost_type: '補助/自費',
		admin_pp: '計次/不計次',
		drive_pp: '計次/不計次',
		start: '2016-06-19T07:45:00',
		end: '2016-06-19T10:15:00',
		taskCycle: '連續至結案',
		taskItem: '整理家務/帶出門看醫生/陪聊天散步/菜煮飯打掃/洗澡',
		wai_name: '居服員03',
		wai: [
			{
				name: '居服員03',
				arrive: '08:20',
				leave: '12:35',
				arrive_sign: '',
				arrive_qr: '',
				leave_sign: '',
				leave_qr: '',
				arrive_token: 0,
				leave_token: 2,
			},
		],
		checkin: [
			{
				distance: '10公尺',
				maps: 'https://goo.gl/qg8muj',
			}
		],
		war_name: '督導員',
		e_sign: 'http://www.ezhoca.com/img/logo_shuttle.svg',
		task_note: '內容文字',
		miss_status: ['個案不受服務','個案不在家','未遇到個案'],
		miss_pay: '',
		miss_subsidy: '',
		miss_note: 'miss_note',
	},
	{
		className: ['eventTask','attendant02','attendant08','case01'],
		lone_care: 'SL12345678',
		case_name: '曹爺爺',
		case_phone: ['0912-345-678'],
		eme_name: '王先生',
		eme_phone: '0988-888-888',
		eme: [
			{
				name: '王大明',
				cognate: '父子',
				phone: '0988-888-888'
			},
			{
				name: '王小明',
				cognate: '兄弟',
				phone: '02-1234-5678'
			}
		],
		cost_type: '補助/自費',
		admin_pp: '計次/不計次',
		drive_pp: '計次/不計次',
		start: '2016-06-19T08:25:00',
		end: '2016-06-19T09:55:00',
		taskCycle: '連續至結案',
		taskItem: '整理家務/帶出門看醫生/陪聊天散步/菜煮飯打掃/洗澡',
		wai_name: '居服員02',
		wai: [
			{
				name: '居服員02',
				arrive: '08:20',
				leave: '12:35',
				arrive_sign: '',
				arrive_qr: '',
				leave_sign: '',
				leave_qr: '',
				arrive_token: 2,
				leave_token: 2,
			},
			{
				name: '居服員08',
				arrive: '08:20',
				leave: '12:35',
				arrive_sign: '',
				arrive_qr: '',
				leave_sign: '',
				leave_qr: '',
				arrive_token: 0,
				leave_token: 0,
			}
		],
		checkin: [
			{
				distance: '12公尺',
				maps: 'https://goo.gl/qg8muj',
			}
		],
		war_name: '督導員',
		e_sign: '',
		task_note: '內容文字',
		miss_status: ['個案不受服務','個案不在家','未遇到個案'],
		miss_pay: '',
		miss_subsidy: '',
		miss_note: 'miss_note',
	},
	{
		className: ['eventTask','attendant01','case04'],
		lone_care: 'SL12345678',
		case_name: '黃王奶奶',
		case_phone: ['0912-345-678'],
		eme_name: '王先生',
		eme_phone: '0988-888-888',
		eme: [
			{
				name: '王大明',
				cognate: '父子',
				phone: '0988-888-888'
			},
			{
				name: '王小明',
				cognate: '兄弟',
				phone: '02-1234-5678'
			}
		],
		cost_type: '補助/自費',
		admin_pp: '計次/不計次',
		drive_pp: '計次/不計次',
		start: '2016-06-20T10:50:00',
		end: '2016-06-20T12:20:00',
		taskCycle: '連續至結案',
		taskItem: '整理家務/帶出門看醫生/陪聊天散步/菜煮飯打掃/洗澡',
		wai_name: '居服員01',
		wai: [
			{
				name: '居服員01',
				arrive: '08:20',
				leave: '12:35',
				arrive_sign: '',
				arrive_qr: '',
				leave_sign: '',
				leave_qr: '',
				arrive_token: 2,
				leave_token: 2,
			}
		],
		checkin: [
			{
				distance: '5公尺',
				maps: 'https://goo.gl/qg8muj',
			}
		],
		war_name: '督導員',
		e_sign: '',
		task_note: '內容文字',
		miss_status: ['個案不受服務','個案不在家','未遇到個案'],
		miss_pay: '',
		miss_subsidy: '',
		miss_note: 'miss_note',
	},
	{
		className: ['eventTask','attendant03','case01'],
		lone_care: 'SL12345678',
		case_name: '曹爺爺',
		case_phone: ['0912-345-678'],
		eme_name: '王先生',
		eme_phone: '0988-888-888',
		eme: [
			{
				name: '王大明',
				cognate: '父子',
				phone: '0988-888-888'
			},
			{
				name: '王小明',
				cognate: '兄弟',
				phone: '02-1234-5678'
			}
		],
		cost_type: '補助/自費',
		admin_pp: '計次/不計次',
		drive_pp: '計次/不計次',
		start: '2016-06-21T11:25:00',
		end: '2016-06-21T12:25:00',
		taskCycle: '連續至結案',
		taskItem: '整理家務/帶出門看醫生/陪聊天散步/菜煮飯打掃/洗澡',
		wai_name: '居服員03',
		wai: [
			{
				name: '居服員03',
				arrive: '08:20',
				leave: '12:35',
				arrive_sign: '',
				arrive_qr: '',
				leave_sign: '',
				leave_qr: '',
				arrive_token: 2,
				leave_token: 2,
			}
		],
		checkin: [
			{
				distance: '15公尺',
				maps: 'https://goo.gl/qg8muj',
			}
		],
		war_name: '督導員',
		e_sign: '',
		task_note: '內容文字',
		miss_status: ['個案不受服務','個案不在家','未遇到個案'],
		miss_pay: '',
		miss_subsidy: '',
		miss_note: 'miss_note',
	},
	{
		className: ['eventTask','attendant02','case04'],
		lone_care: 'SL12345678',
		case_name: '黃王奶奶',
		case_phone: ['0912-345-678'],
		eme_name: '王先生',
		eme_phone: '0988-888-888',
		eme: [
			{
				name: '王大明',
				cognate: '父子',
				phone: '0988-888-888'
			},
			{
				name: '王小明',
				cognate: '兄弟',
				phone: '02-1234-5678'
			}
		],
		cost_type: '補助/自費',
		admin_pp: '計次/不計次',
		drive_pp: '計次/不計次',
		start: '2016-06-22T13:00:00',
		end: '2016-06-22T15:00:00',
		taskCycle: '連續至結案',
		taskItem: '整理家務/帶出門看醫生/陪聊天散步/菜煮飯打掃/洗澡',
		wai_name: '居服員02',
		wai: [
			{
				name: '居服員02',
				arrive: '08:20',
				leave: '12:35',
				arrive_sign: '',
				arrive_qr: '',
				leave_sign: '',
				leave_qr: '',
				arrive_token: 2,
				leave_token: 2,
			}
		],
		checkin: [
			{
				distance: '30公尺',
				maps: 'https://goo.gl/qg8muj',
			}
		],
		war_name: '督導員',
		e_sign: 'http://www.ezhoca.com/img/logo_shuttle.svg',
		task_note: '內容文字',
		miss_status: ['個案不受服務','個案不在家','未遇到個案'],
		miss_pay: '',
		miss_subsidy: '',
		miss_note: 'miss_note',
	},
	{
		className: ['eventTask','attendant03','case04'],
		lone_care: 'SL12345678',
		case_name: '黃王奶奶',
		case_phone: ['0912-345-678'],
		eme_name: '王先生',
		eme_phone: '0988-888-888',
		eme: [
			{
				name: '王大明',
				cognate: '父子',
				phone: '0988-888-888'
			},
			{
				name: '王小明',
				cognate: '兄弟',
				phone: '02-1234-5678'
			}
		],
		cost_type: '補助/自費',
		admin_pp: '計次/不計次',
		drive_pp: '計次/不計次',
		start: '2016-06-23T10:50:00',
		end: '2016-06-23T11:50:00',
		taskCycle: '連續至結案',
		taskItem: '整理家務/帶出門看醫生/陪聊天散步/菜煮飯打掃/洗澡',
		wai_name: '居服員03',
		wai: [
			{
				name: '居服員03',
				arrive: '08:20',
				leave: '12:35',
				arrive_sign: '',
				arrive_qr: '',
				leave_sign: '',
				leave_qr: '',
				arrive_token: 2,
				leave_token: 2,
			}
		],
		checkin: [
			{
				distance: '30公尺',
				maps: 'https://goo.gl/qg8muj',
			}
		],
		war_name: '督導員',
		e_sign: '',
		task_note: '內容文字',
		miss_status: ['個案不受服務','個案不在家','個案改期'],
		miss_subsidy: '100',
		miss_note: 'miss_note',
	},
	{
		className: ['eventTask','attendant03','case06'],
		lone_care: 'SL12345678',
		case_name: '王奶奶',
		case_phone: ['0912-345-678'],
		eme_name: '王先生',
		eme_phone: '0988-888-888',
		eme: [
			{
				name: '王大明',
				cognate: '父子',
				phone: '0988-888-888'
			},
			{
				name: '王小明',
				cognate: '兄弟',
				phone: '02-1234-5678'
			}
		],
		cost_type: '補助/自費',
		admin_pp: '計次/不計次',
		drive_pp: '計次/不計次',
		start: '2016-06-23T10:50:00',
		end: '2016-06-23T11:50:00',
		taskCycle: '連續至結案',
		taskItem: '整理家務/帶出門看醫生/陪聊天散步/菜煮飯打掃/洗澡',
		wai_name: '居服員03',
		wai: [
			{
				name: '居服員03',
				arrive: '08:20',
				leave: '12:35',
				arrive_sign: '',
				arrive_qr: '',
				leave_sign: '',
				leave_qr: '',
				arrive_token: 2,
				leave_token: 2,
			}
		],
		checkin: [
			{
				distance: '50公尺',
				maps: 'https://goo.gl/qg8muj',
			}
		],
		war_name: '督導員',
		e_sign: 'http://www.ezhoca.com/img/logo_shuttle.svg',
		task_note: '內容文字',
		miss_status: ['個案不受服務','個案不在家','未遇到個案'],
		miss_pay: '',
		miss_subsidy: '',
		miss_note: 'miss_note',
	},

	{
		className: ['eventMeeting'],
		case_name: '6月份職訓',
		issue: '居家服務照護 - 6月份職業訓練會議',
		eventLocation: '三樓會議室',
		start: '2016-06-06T09:00:00',
		end: '2016-06-06T12:00:00',
		participants: '居服員/居服員/居服員/居服員/居服員/居服員/居服員/居服員/居服員/居服員/居服員',
		task_note: '內容文字',
	},
	{
		className: ['eventMeeting'],
		case_name: '居服會',
		issue: '6月份第一週居家服務會議',
		eventLocation: '一樓會議室',
		start: '2016-06-06T13:00:00',
		end: '2016-06-06T17:00:00',
		participants: '居服員/居服員/居服員/居服員/居服員/居服員/居服員/居服員/居服員/居服員/居服員',
		task_note: '內容文字',
	}
]