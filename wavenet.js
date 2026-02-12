const https = require('https');

let voice_options = {
	anne: {
		language: 'da-DK',
		gender: 'female',
		wav: 'da-DK-Wavenet-D',
		text: 'Danish female'
	},
	lucas: {
		language: 'da-DK',
		gender: 'male',
		wav: 'da-DK-Wavenet-C',
		text: 'Danish male'
	},
	janjaap: {
		language: 'nl-Nl',
		gender: 'male',
		wav: 'nl-Nl-Wavenet-B',
		text: 'Dutch male'
	},
	kees: {
		language: 'nl-Nl',
		gender: 'male',
		wav: 'nl-Nl-Wavenet-C',
		text: 'Dutch male'
	},
	sjaan: {
		language: 'nl-Nl',
		gender: 'female',
		wav: 'nl-Nl-Wavenet-D',
		text: 'Dutch female'
	},
	bep: {
		language: 'nl-Nl',
		gender: 'female',
		wav: 'nl-Nl-Wavenet-E',
		text: 'Dutch female'
	},
	miep: {
		language: 'nl-Nl',
		gender: 'female',
		wav: 'nl-Nl-Wavenet-A',
		text: 'Dutch female'
	},
	russel: {
		language: 'en-AU',
		gender: 'male',
		wav: 'en-AU-Wavenet-B',
		text: 'Australian male'
	},
	thomas: {
		language: 'en-AU',
		gender: 'male',
		wav: 'en-AU-Wavenet-D',
		text: 'Australian male'
	},
	nicole: {
		language: 'en-AU',
		gender: 'female',
		wav: 'en-AU-Wavenet-A',
		text: 'Australian female'
	},
	mary: {
		language: 'en-AU',
		gender: 'female',
		wav: 'en-AU-Wavenet-C',
		text: 'Australian female'
	},
	brian: {
		language: 'en-GB',
		gender: 'male',
		wav: 'en-GB-Wavenet-B',
		text: 'British male'
	},
	paul: {
		language: 'en-GB',
		gender: 'male',
		wav: 'en-GB-Wavenet-D',
		text: 'British male'
	},
	emma: {
		language: 'en-GB',
		gender: 'female',
		wav: 'en-GB-Wavenet-A',
		text: 'British female'
	},
	amy: {
		language: 'en-GB',
		gender: 'female',
		wav: 'en-GB-Wavenet-C',
		text: 'British female'
	},
	mathew: {
		language: 'en-US',
		gender: 'male',
		wav: 'en-US-Wavenet-B',
		text: 'American male'
	},
	justin: {
		language: 'en-US',
		gender: 'male',
		wav: 'en-US-Wavenet-D',
		text: 'American male'
	},
	joanna: {
		language: 'en-US',
		gender: 'female',
		wav: 'en-US-Wavenet-A',
		text: 'American female'
	},
	ivy: {
		language: 'en-US',
		gender: 'female',
		wav: 'en-US-Wavenet-C',
		text: 'American female'
	},
	kimberly: {
		language: 'en-US',
		gender: 'female',
		wav: 'en-US-Wavenet-E',
		text: 'American female'
	},
	salli: {
		language: 'en-US',
		gender: 'female',
		wav: 'en-US-Wavenet-F',
		text: 'American female'
	},
	ella: {
		language: 'da-DK',
		gender: 'female',
		wav: 'da-DK-Wavenet-A',
		text: 'Danish female'
	},
	amina: {
		language: 'ar-XA',
		gender: 'female',
		wav: 'ar-XA-Wavenet-A',
		text: 'Arabian female'
	},
	amir: {
		language: 'ar-XA',
		gender: 'male',
		wav: 'ar-XA-Wavenet-C',
		text: 'Arabian male'
	},
	chen: {
		language: 'cmn-CN',
		gender: 'female',
		wav: 'cmn-CN-Wavenet-A',
		text: 'Chinese Mandarin female'
	},
	chang: {
		language: 'cmn-CN',
		gender: 'male',
		wav: 'cmn-CN-Wavenet-B',
		text: 'Chinese Mandarin male'
	},
	hu: {
		language: 'cmn-CN',
		gender: 'male',
		wav: 'cmn-CN-Wavenet-C',
		text: 'Chinese Mandarin male'
	},
	mei: {
		language: 'cmn-CN',
		gender: 'female',
		wav: 'cmn-CN-Wavenet-D',
		text: 'Chinese Mandarin female'
	},
	lucie: {
		language: 'cs-CZ',
		gender: 'female',
		wav: 'cs-CZ-Wavenet-A',
		text: 'Czech female'
	},
	sofia: {
		language: 'de-DE',
		gender: 'female',
		wav: 'de-DE-Wavenet-A',
		text: 'German female'
	},
	ben: {
		language: 'de-DE',
		gender: 'male',
		wav: 'de-DE-Wavenet-B',
		text: 'German male'
	},
	lyra: {
		language: 'el-GR',
		gender: 'female',
		wav: 'el-GR-Wavenet-A',
		text: 'Greek female'
	},
	aparna: {
		language: 'en-IN',
		gender: 'female',
		wav: 'en-IN-Wavenet-A',
		text: 'Indian female'
	},
	rahul: {
		language: 'en-IN',
		gender: 'male',
		wav: 'en-IN-Wavenet-B',
		text: 'Indian male'
	},
	ella: {
		language: 'fi-FI',
		gender: 'female',
		wav: 'fi-FI-Wavenet-A',
		text: 'Finnish female'
	},
	darna: {
		language: 'fil-PH',
		gender: 'female',
		wav: 'fil-PH-Wavenet-A',
		text: 'Filippino female'
	},
	olivia: {
		language: 'fr-CA',
		gender: 'female',
		wav: 'fr-CA-Wavenet-A',
		text: 'French Canadian female'
	},
	liam: {
		language: 'fr-CA',
		gender: 'male',
		wav: 'fr-CA-Wavenet-B',
		text: 'French Canadian male'
	},
	sarah: {
		language: 'fr-FR',
		gender: 'female',
		wav: 'fr-FR-Wavenet-A',
		text: 'French female'
	},
	victor: {
		language: 'fr-FR',
		gender: 'male',
		wav: 'fr-FR-Wavenet-B',
		text: 'French male'
	},
	simran: {
		language: 'hi-IN',
		gender: 'female',
		wav: 'hi-IN-Wavenet-A',
		text: 'Hindi female'
	},
	jai: {
		language: 'hi-IN',
		gender: 'male',
		wav: 'hi-IN-Wavenet-B',
		text: 'Hindi male'
	},
	nora: {
		language: 'hu-HU',
		gender: 'female',
		wav: 'hu-HU-Wavenet-A',
		text: 'Hungarian female'
	},
	melati: {
		language: 'id-ID',
		gender: 'female',
		wav: 'id-ID-Wavenet-A',
		text: 'Indonesian female'
	},
	agung: {
		language: 'id-ID',
		gender: 'male',
		wav: 'id-ID-Wavenet-B',
		text: 'Indonesian male'
	},
	gabriella: {
		language: 'it-IT',
		gender: 'female',
		wav: 'it-IT-Wavenet-A',
		text: 'Italian female'
	},
	antonio: {
		language: 'it-IT',
		gender: 'male',
		wav: 'it-IT-Wavenet-C',
		text: 'Italian male'
	},
	yuna: {
		language: 'ja-JP',
		gender: 'female',
		wav: 'ja-JP-Wavenet-A',
		text: 'Japanese female'
	},
	asahi: {
		language: 'ja-JP',
		gender: 'male',
		wav: 'ja-JP-Wavenet-C',
		text: 'Japanese male'
	},
	misun: {
		language: 'ko-KR',
		gender: 'female',
		wav: 'ko-KR-Wavenet-B',
		text: 'Korean female'
	},
	kyong: {
		language: 'ko-KR',
		gender: 'male',
		wav: 'ko-KR-Wavenet-C',
		text: 'Korean male'
	},
	leah: {
		language: 'nb-NO',
		gender: 'female',
		wav: 'nb-NO-Wavenet-C',
		text: 'Norwegian female'
	},
	lucas: {
		language: 'nb-NO',
		gender: 'male',
		wav: 'nb-NO-Wavenet-B',
		text: 'Norwegian male'
	},
	amelia: {
		language: 'pl-PL',
		gender: 'female',
		wav: 'pl-PL-Wavenet-A',
		text: 'Polish female'
	},
	filip: {
		language: 'pl-PL',
		gender: 'male',
		wav: 'pl-PL-Wavenet-B',
		text: 'Polish male'
	},
	pl_achernar: {
		language: 'pl-PL',
		gender: 'female',
		wav: 'pl-PL-Chirp3-HD-Achernar',
		text: 'Polish female (Chirp3-HD)'
	},
	pl_achird: {
		language: 'pl-PL',
		gender: 'male',
		wav: 'pl-PL-Chirp3-HD-Achird',
		text: 'Polish male (Chirp3-HD)'
	},
	pl_algenib: {
		language: 'pl-PL',
		gender: 'male',
		wav: 'pl-PL-Chirp3-HD-Algenib',
		text: 'Polish male (Chirp3-HD)'
	},
	pl_algieba: {
		language: 'pl-PL',
		gender: 'male',
		wav: 'pl-PL-Chirp3-HD-Algieba',
		text: 'Polish male (Chirp3-HD)'
	},
	pl_alnilam: {
		language: 'pl-PL',
		gender: 'male',
		wav: 'pl-PL-Chirp3-HD-Alnilam',
		text: 'Polish male (Chirp3-HD)'
	},
	pl_aoede: {
		language: 'pl-PL',
		gender: 'female',
		wav: 'pl-PL-Chirp3-HD-Aoede',
		text: 'Polish female (Chirp3-HD)'
	},
	pl_autonoe: {
		language: 'pl-PL',
		gender: 'female',
		wav: 'pl-PL-Chirp3-HD-Autonoe',
		text: 'Polish female (Chirp3-HD)'
	},
	pl_callirrhoe: {
		language: 'pl-PL',
		gender: 'female',
		wav: 'pl-PL-Chirp3-HD-Callirrhoe',
		text: 'Polish female (Chirp3-HD)'
	},
	pl_charon: {
		language: 'pl-PL',
		gender: 'male',
		wav: 'pl-PL-Chirp3-HD-Charon',
		text: 'Polish male (Chirp3-HD)'
	},
	pl_despina: {
		language: 'pl-PL',
		gender: 'female',
		wav: 'pl-PL-Chirp3-HD-Despina',
		text: 'Polish female (Chirp3-HD)'
	},
	pl_enceladus: {
		language: 'pl-PL',
		gender: 'male',
		wav: 'pl-PL-Chirp3-HD-Enceladus',
		text: 'Polish male (Chirp3-HD)'
	},
	pl_erinome: {
		language: 'pl-PL',
		gender: 'female',
		wav: 'pl-PL-Chirp3-HD-Erinome',
		text: 'Polish female (Chirp3-HD)'
	},
	pl_fenrir: {
		language: 'pl-PL',
		gender: 'male',
		wav: 'pl-PL-Chirp3-HD-Fenrir',
		text: 'Polish male (Chirp3-HD)'
	},
	pl_gacrux: {
		language: 'pl-PL',
		gender: 'female',
		wav: 'pl-PL-Chirp3-HD-Gacrux',
		text: 'Polish female (Chirp3-HD)'
	},
	pl_iapetus: {
		language: 'pl-PL',
		gender: 'male',
		wav: 'pl-PL-Chirp3-HD-Iapetus',
		text: 'Polish male (Chirp3-HD)'
	},
	pl_kore: {
		language: 'pl-PL',
		gender: 'female',
		wav: 'pl-PL-Chirp3-HD-Kore',
		text: 'Polish female (Chirp3-HD)'
	},
	pl_laomedeia: {
		language: 'pl-PL',
		gender: 'female',
		wav: 'pl-PL-Chirp3-HD-Laomedeia',
		text: 'Polish female (Chirp3-HD)'
	},
	pl_leda: {
		language: 'pl-PL',
		gender: 'female',
		wav: 'pl-PL-Chirp3-HD-Leda',
		text: 'Polish female (Chirp3-HD)'
	},
	pl_orus: {
		language: 'pl-PL',
		gender: 'male',
		wav: 'pl-PL-Chirp3-HD-Orus',
		text: 'Polish male (Chirp3-HD)'
	},
	pl_puck: {
		language: 'pl-PL',
		gender: 'male',
		wav: 'pl-PL-Chirp3-HD-Puck',
		text: 'Polish male (Chirp3-HD)'
	},
	pl_pulcherrima: {
		language: 'pl-PL',
		gender: 'female',
		wav: 'pl-PL-Chirp3-HD-Pulcherrima',
		text: 'Polish female (Chirp3-HD)'
	},
	pl_rasalgethi: {
		language: 'pl-PL',
		gender: 'male',
		wav: 'pl-PL-Chirp3-HD-Rasalgethi',
		text: 'Polish male (Chirp3-HD)'
	},
	pl_sadachbia: {
		language: 'pl-PL',
		gender: 'male',
		wav: 'pl-PL-Chirp3-HD-Sadachbia',
		text: 'Polish male (Chirp3-HD)'
	},
	pl_sadaltager: {
		language: 'pl-PL',
		gender: 'male',
		wav: 'pl-PL-Chirp3-HD-Sadaltager',
		text: 'Polish male (Chirp3-HD)'
	},
	pl_schedar: {
		language: 'pl-PL',
		gender: 'male',
		wav: 'pl-PL-Chirp3-HD-Schedar',
		text: 'Polish male (Chirp3-HD)'
	},
	pl_sulafat: {
		language: 'pl-PL',
		gender: 'female',
		wav: 'pl-PL-Chirp3-HD-Sulafat',
		text: 'Polish female (Chirp3-HD)'
	},
	pl_umbriel: {
		language: 'pl-PL',
		gender: 'male',
		wav: 'pl-PL-Chirp3-HD-Umbriel',
		text: 'Polish male (Chirp3-HD)'
	},
	pl_vindemiatrix: {
		language: 'pl-PL',
		gender: 'female',
		wav: 'pl-PL-Chirp3-HD-Vindemiatrix',
		text: 'Polish female (Chirp3-HD)'
	},
	pl_zephyr: {
		language: 'pl-PL',
		gender: 'female',
		wav: 'pl-PL-Chirp3-HD-Zephyr',
		text: 'Polish female (Chirp3-HD)'
	},
	pl_zubenelgenubi: {
		language: 'pl-PL',
		gender: 'male',
		wav: 'pl-PL-Chirp3-HD-Zubenelgenubi',
		text: 'Polish male (Chirp3-HD)'
	},
	maria: {
		language: 'pt-PT',
		gender: 'female',
		wav: 'pt-PT-Wavenet-A',
		text: 'Portugese female'
	},
	tomas: {
		language: 'pt-PT',
		gender: 'male',
		wav: 'pt-PT-Wavenet-B',
		text: 'Portugese male'
	},
	nadia: {
		language: 'ru-RU',
		gender: 'female',
		wav: 'ru-RU-Wavenet-E',
		text: 'Russian female'
	},
	anatoly: {
		language: 'ru-RU',
		gender: 'male',
		wav: 'ru-RU-Wavenet-B',
		text: 'Russian male'
	},
	laura: {
		language: 'sk-SK',
		gender: 'female',
		wav: 'sk-SK-Wavenet-A',
		text: 'Slovak female'
	},
	lilly: {
		language: 'sv-SE',
		gender: 'female',
		wav: 'sv-SE-Wavenet-A',
		text: 'Swedish female'
	},
	defne: {
		language: 'tr-TR',
		gender: 'female',
		wav: 'tr-TR-Wavenet-A',
		text: 'Turkish female'
	},
	yusuf: {
		language: 'tr-TR',
		gender: 'male',
		wav: 'tr-TR-Wavenet-B',
		text: 'Turkish male'
	},
	alina: {
		language: 'uk-UA',
		gender: 'female',
		wav: 'uk-UA-Wavenet-A',
		text: 'Ukranian female'
	},
	bian: {
		language: 'vi-VN',
		gender: 'female',
		wav: 'vi-VN-Wavenet-A',
		text: 'Vietnamese female'
	},
	danh: {
		language: 'vi-VN',
		gender: 'male',
		wav: 'vi-VN-Wavenet-B',
		text: 'Vietnamese male'
	},

	// German (de-DE) Chirp3-HD
	de_DE_achernar: { language: 'de-DE', gender: 'female', wav: 'de-DE-Chirp3-HD-Achernar', text: 'German Achernar (Chirp3-HD)' },
	de_DE_achird: { language: 'de-DE', gender: 'male', wav: 'de-DE-Chirp3-HD-Achird', text: 'German Achird (Chirp3-HD)' },
	de_DE_algenib: { language: 'de-DE', gender: 'male', wav: 'de-DE-Chirp3-HD-Algenib', text: 'German Algenib (Chirp3-HD)' },
	de_DE_algieba: { language: 'de-DE', gender: 'male', wav: 'de-DE-Chirp3-HD-Algieba', text: 'German Algieba (Chirp3-HD)' },
	de_DE_alnilam: { language: 'de-DE', gender: 'male', wav: 'de-DE-Chirp3-HD-Alnilam', text: 'German Alnilam (Chirp3-HD)' },
	de_DE_aoede: { language: 'de-DE', gender: 'female', wav: 'de-DE-Chirp3-HD-Aoede', text: 'German Aoede (Chirp3-HD)' },
	de_DE_autonoe: { language: 'de-DE', gender: 'female', wav: 'de-DE-Chirp3-HD-Autonoe', text: 'German Autonoe (Chirp3-HD)' },
	de_DE_callirrhoe: { language: 'de-DE', gender: 'female', wav: 'de-DE-Chirp3-HD-Callirrhoe', text: 'German Callirrhoe (Chirp3-HD)' },
	de_DE_charon: { language: 'de-DE', gender: 'male', wav: 'de-DE-Chirp3-HD-Charon', text: 'German Charon (Chirp3-HD)' },
	de_DE_despina: { language: 'de-DE', gender: 'female', wav: 'de-DE-Chirp3-HD-Despina', text: 'German Despina (Chirp3-HD)' },
	de_DE_enceladus: { language: 'de-DE', gender: 'male', wav: 'de-DE-Chirp3-HD-Enceladus', text: 'German Enceladus (Chirp3-HD)' },
	de_DE_erinome: { language: 'de-DE', gender: 'female', wav: 'de-DE-Chirp3-HD-Erinome', text: 'German Erinome (Chirp3-HD)' },
	de_DE_fenrir: { language: 'de-DE', gender: 'male', wav: 'de-DE-Chirp3-HD-Fenrir', text: 'German Fenrir (Chirp3-HD)' },
	de_DE_gacrux: { language: 'de-DE', gender: 'female', wav: 'de-DE-Chirp3-HD-Gacrux', text: 'German Gacrux (Chirp3-HD)' },
	de_DE_iapetus: { language: 'de-DE', gender: 'male', wav: 'de-DE-Chirp3-HD-Iapetus', text: 'German Iapetus (Chirp3-HD)' },
	de_DE_kore: { language: 'de-DE', gender: 'female', wav: 'de-DE-Chirp3-HD-Kore', text: 'German Kore (Chirp3-HD)' },
	de_DE_laomedeia: { language: 'de-DE', gender: 'female', wav: 'de-DE-Chirp3-HD-Laomedeia', text: 'German Laomedeia (Chirp3-HD)' },
	de_DE_leda: { language: 'de-DE', gender: 'female', wav: 'de-DE-Chirp3-HD-Leda', text: 'German Leda (Chirp3-HD)' },
	de_DE_orus: { language: 'de-DE', gender: 'male', wav: 'de-DE-Chirp3-HD-Orus', text: 'German Orus (Chirp3-HD)' },
	de_DE_puck: { language: 'de-DE', gender: 'male', wav: 'de-DE-Chirp3-HD-Puck', text: 'German Puck (Chirp3-HD)' },
	de_DE_pulcherrima: { language: 'de-DE', gender: 'female', wav: 'de-DE-Chirp3-HD-Pulcherrima', text: 'German Pulcherrima (Chirp3-HD)' },
	de_DE_rasalgethi: { language: 'de-DE', gender: 'male', wav: 'de-DE-Chirp3-HD-Rasalgethi', text: 'German Rasalgethi (Chirp3-HD)' },
	de_DE_sadachbia: { language: 'de-DE', gender: 'male', wav: 'de-DE-Chirp3-HD-Sadachbia', text: 'German Sadachbia (Chirp3-HD)' },
	de_DE_sadaltager: { language: 'de-DE', gender: 'male', wav: 'de-DE-Chirp3-HD-Sadaltager', text: 'German Sadaltager (Chirp3-HD)' },
	de_DE_schedar: { language: 'de-DE', gender: 'male', wav: 'de-DE-Chirp3-HD-Schedar', text: 'German Schedar (Chirp3-HD)' },
	de_DE_sulafat: { language: 'de-DE', gender: 'female', wav: 'de-DE-Chirp3-HD-Sulafat', text: 'German Sulafat (Chirp3-HD)' },
	de_DE_umbriel: { language: 'de-DE', gender: 'male', wav: 'de-DE-Chirp3-HD-Umbriel', text: 'German Umbriel (Chirp3-HD)' },
	de_DE_vindemiatrix: { language: 'de-DE', gender: 'female', wav: 'de-DE-Chirp3-HD-Vindemiatrix', text: 'German Vindemiatrix (Chirp3-HD)' },
	de_DE_zephyr: { language: 'de-DE', gender: 'female', wav: 'de-DE-Chirp3-HD-Zephyr', text: 'German Zephyr (Chirp3-HD)' },
	de_DE_zubenelgenubi: { language: 'de-DE', gender: 'male', wav: 'de-DE-Chirp3-HD-Zubenelgenubi', text: 'German Zubenelgenubi (Chirp3-HD)' },
	de_DE_neural2_g: { language: 'de-DE', gender: 'female', wav: 'de-DE-Neural2-G', text: 'German Neural2 G' },
	de_DE_neural2_h: { language: 'de-DE', gender: 'male', wav: 'de-DE-Neural2-H', text: 'German Neural2 H' },
	de_DE_wavenet_g: { language: 'de-DE', gender: 'female', wav: 'de-DE-Wavenet-G', text: 'German Wavenet G' },
	de_DE_wavenet_h: { language: 'de-DE', gender: 'male', wav: 'de-DE-Wavenet-H', text: 'German Wavenet H' },
	de_DE_studio_b: { language: 'de-DE', gender: 'male', wav: 'de-DE-Studio-B', text: 'German Studio B' },
	de_DE_studio_c: { language: 'de-DE', gender: 'female', wav: 'de-DE-Studio-C', text: 'German Studio C' },

	// Spanish Spain (es-ES)
	es_ES_achernar: { language: 'es-ES', gender: 'female', wav: 'es-ES-Chirp3-HD-Achernar', text: 'Spanish (ES) Achernar (Chirp3-HD)' },
	es_ES_achird: { language: 'es-ES', gender: 'male', wav: 'es-ES-Chirp3-HD-Achird', text: 'Spanish (ES) Achird (Chirp3-HD)' },
	es_ES_algenib: { language: 'es-ES', gender: 'male', wav: 'es-ES-Chirp3-HD-Algenib', text: 'Spanish (ES) Algenib (Chirp3-HD)' },
	es_ES_algieba: { language: 'es-ES', gender: 'male', wav: 'es-ES-Chirp3-HD-Algieba', text: 'Spanish (ES) Algieba (Chirp3-HD)' },
	es_ES_alnilam: { language: 'es-ES', gender: 'male', wav: 'es-ES-Chirp3-HD-Alnilam', text: 'Spanish (ES) Alnilam (Chirp3-HD)' },
	es_ES_aoede: { language: 'es-ES', gender: 'female', wav: 'es-ES-Chirp3-HD-Aoede', text: 'Spanish (ES) Aoede (Chirp3-HD)' },
	es_ES_autonoe: { language: 'es-ES', gender: 'female', wav: 'es-ES-Chirp3-HD-Autonoe', text: 'Spanish (ES) Autonoe (Chirp3-HD)' },
	es_ES_callirrhoe: { language: 'es-ES', gender: 'female', wav: 'es-ES-Chirp3-HD-Callirrhoe', text: 'Spanish (ES) Callirrhoe (Chirp3-HD)' },
	es_ES_charon: { language: 'es-ES', gender: 'male', wav: 'es-ES-Chirp3-HD-Charon', text: 'Spanish (ES) Charon (Chirp3-HD)' },
	es_ES_despina: { language: 'es-ES', gender: 'female', wav: 'es-ES-Chirp3-HD-Despina', text: 'Spanish (ES) Despina (Chirp3-HD)' },
	es_ES_enceladus: { language: 'es-ES', gender: 'male', wav: 'es-ES-Chirp3-HD-Enceladus', text: 'Spanish (ES) Enceladus (Chirp3-HD)' },
	es_ES_erinome: { language: 'es-ES', gender: 'female', wav: 'es-ES-Chirp3-HD-Erinome', text: 'Spanish (ES) Erinome (Chirp3-HD)' },
	es_ES_fenrir: { language: 'es-ES', gender: 'male', wav: 'es-ES-Chirp3-HD-Fenrir', text: 'Spanish (ES) Fenrir (Chirp3-HD)' },
	es_ES_gacrux: { language: 'es-ES', gender: 'female', wav: 'es-ES-Chirp3-HD-Gacrux', text: 'Spanish (ES) Gacrux (Chirp3-HD)' },
	es_ES_iapetus: { language: 'es-ES', gender: 'male', wav: 'es-ES-Chirp3-HD-Iapetus', text: 'Spanish (ES) Iapetus (Chirp3-HD)' },
	es_ES_kore: { language: 'es-ES', gender: 'female', wav: 'es-ES-Chirp3-HD-Kore', text: 'Spanish (ES) Kore (Chirp3-HD)' },
	es_ES_laomedeia: { language: 'es-ES', gender: 'female', wav: 'es-ES-Chirp3-HD-Laomedeia', text: 'Spanish (ES) Laomedeia (Chirp3-HD)' },
	es_ES_leda: { language: 'es-ES', gender: 'female', wav: 'es-ES-Chirp3-HD-Leda', text: 'Spanish (ES) Leda (Chirp3-HD)' },
	es_ES_orus: { language: 'es-ES', gender: 'male', wav: 'es-ES-Chirp3-HD-Orus', text: 'Spanish (ES) Orus (Chirp3-HD)' },
	es_ES_puck: { language: 'es-ES', gender: 'male', wav: 'es-ES-Chirp3-HD-Puck', text: 'Spanish (ES) Puck (Chirp3-HD)' },
	es_ES_pulcherrima: { language: 'es-ES', gender: 'female', wav: 'es-ES-Chirp3-HD-Pulcherrima', text: 'Spanish (ES) Pulcherrima (Chirp3-HD)' },
	es_ES_rasalgethi: { language: 'es-ES', gender: 'male', wav: 'es-ES-Chirp3-HD-Rasalgethi', text: 'Spanish (ES) Rasalgethi (Chirp3-HD)' },
	es_ES_sadachbia: { language: 'es-ES', gender: 'male', wav: 'es-ES-Chirp3-HD-Sadachbia', text: 'Spanish (ES) Sadachbia (Chirp3-HD)' },
	es_ES_sadaltager: { language: 'es-ES', gender: 'male', wav: 'es-ES-Chirp3-HD-Sadaltager', text: 'Spanish (ES) Sadaltager (Chirp3-HD)' },
	es_ES_schedar: { language: 'es-ES', gender: 'male', wav: 'es-ES-Chirp3-HD-Schedar', text: 'Spanish (ES) Schedar (Chirp3-HD)' },
	es_ES_sulafat: { language: 'es-ES', gender: 'female', wav: 'es-ES-Chirp3-HD-Sulafat', text: 'Spanish (ES) Sulafat (Chirp3-HD)' },
	es_ES_umbriel: { language: 'es-ES', gender: 'male', wav: 'es-ES-Chirp3-HD-Umbriel', text: 'Spanish (ES) Umbriel (Chirp3-HD)' },
	es_ES_vindemiatrix: { language: 'es-ES', gender: 'female', wav: 'es-ES-Chirp3-HD-Vindemiatrix', text: 'Spanish (ES) Vindemiatrix (Chirp3-HD)' },
	es_ES_zephyr: { language: 'es-ES', gender: 'female', wav: 'es-ES-Chirp3-HD-Zephyr', text: 'Spanish (ES) Zephyr (Chirp3-HD)' },
	es_ES_zubenelgenubi: { language: 'es-ES', gender: 'male', wav: 'es-ES-Chirp3-HD-Zubenelgenubi', text: 'Spanish (ES) Zubenelgenubi (Chirp3-HD)' },
	es_ES_neural2_a: { language: 'es-ES', gender: 'female', wav: 'es-ES-Neural2-A', text: 'Spanish (ES) Neural2 A' },
	es_ES_wavenet_e: { language: 'es-ES', gender: 'male', wav: 'es-ES-Wavenet-E', text: 'Spanish (ES) Wavenet E' },
	es_ES_wavenet_f: { language: 'es-ES', gender: 'female', wav: 'es-ES-Wavenet-F', text: 'Spanish (ES) Wavenet F' },
	es_ES_studio_c: { language: 'es-ES', gender: 'female', wav: 'es-ES-Studio-C', text: 'Spanish (ES) Studio C' },
	es_ES_studio_f: { language: 'es-ES', gender: 'male', wav: 'es-ES-Studio-F', text: 'Spanish (ES) Studio F' },

	// Spanish US (es-US)
	es_US_achernar: { language: 'es-US', gender: 'female', wav: 'es-US-Chirp3-HD-Achernar', text: 'Spanish (US) Achernar (Chirp3-HD)' },
	es_US_achird: { language: 'es-US', gender: 'male', wav: 'es-US-Chirp3-HD-Achird', text: 'Spanish (US) Achird (Chirp3-HD)' },
	es_US_algenib: { language: 'es-US', gender: 'male', wav: 'es-US-Chirp3-HD-Algenib', text: 'Spanish (US) Algenib (Chirp3-HD)' },
	es_US_algieba: { language: 'es-US', gender: 'male', wav: 'es-US-Chirp3-HD-Algieba', text: 'Spanish (US) Algieba (Chirp3-HD)' },
	es_US_alnilam: { language: 'es-US', gender: 'male', wav: 'es-US-Chirp3-HD-Alnilam', text: 'Spanish (US) Alnilam (Chirp3-HD)' },
	es_US_aoede: { language: 'es-US', gender: 'female', wav: 'es-US-Chirp3-HD-Aoede', text: 'Spanish (US) Aoede (Chirp3-HD)' },
	es_US_autonoe: { language: 'es-US', gender: 'female', wav: 'es-US-Chirp3-HD-Autonoe', text: 'Spanish (US) Autonoe (Chirp3-HD)' },
	es_US_callirrhoe: { language: 'es-US', gender: 'female', wav: 'es-US-Chirp3-HD-Callirrhoe', text: 'Spanish (US) Callirrhoe (Chirp3-HD)' },
	es_US_charon: { language: 'es-US', gender: 'male', wav: 'es-US-Chirp3-HD-Charon', text: 'Spanish (US) Charon (Chirp3-HD)' },
	es_US_despina: { language: 'es-US', gender: 'female', wav: 'es-US-Chirp3-HD-Despina', text: 'Spanish (US) Despina (Chirp3-HD)' },
	es_US_enceladus: { language: 'es-US', gender: 'male', wav: 'es-US-Chirp3-HD-Enceladus', text: 'Spanish (US) Enceladus (Chirp3-HD)' },
	es_US_erinome: { language: 'es-US', gender: 'female', wav: 'es-US-Chirp3-HD-Erinome', text: 'Spanish (US) Erinome (Chirp3-HD)' },
	es_US_fenrir: { language: 'es-US', gender: 'male', wav: 'es-US-Chirp3-HD-Fenrir', text: 'Spanish (US) Fenrir (Chirp3-HD)' },
	es_US_gacrux: { language: 'es-US', gender: 'female', wav: 'es-US-Chirp3-HD-Gacrux', text: 'Spanish (US) Gacrux (Chirp3-HD)' },
	es_US_iapetus: { language: 'es-US', gender: 'male', wav: 'es-US-Chirp3-HD-Iapetus', text: 'Spanish (US) Iapetus (Chirp3-HD)' },
	es_US_kore: { language: 'es-US', gender: 'female', wav: 'es-US-Chirp3-HD-Kore', text: 'Spanish (US) Kore (Chirp3-HD)' },
	es_US_laomedeia: { language: 'es-US', gender: 'female', wav: 'es-US-Chirp3-HD-Laomedeia', text: 'Spanish (US) Laomedeia (Chirp3-HD)' },
	es_US_leda: { language: 'es-US', gender: 'female', wav: 'es-US-Chirp3-HD-Leda', text: 'Spanish (US) Leda (Chirp3-HD)' },
	es_US_orus: { language: 'es-US', gender: 'male', wav: 'es-US-Chirp3-HD-Orus', text: 'Spanish (US) Orus (Chirp3-HD)' },
	es_US_puck: { language: 'es-US', gender: 'male', wav: 'es-US-Chirp3-HD-Puck', text: 'Spanish (US) Puck (Chirp3-HD)' },
	es_US_pulcherrima: { language: 'es-US', gender: 'female', wav: 'es-US-Chirp3-HD-Pulcherrima', text: 'Spanish (US) Pulcherrima (Chirp3-HD)' },
	es_US_rasalgethi: { language: 'es-US', gender: 'male', wav: 'es-US-Chirp3-HD-Rasalgethi', text: 'Spanish (US) Rasalgethi (Chirp3-HD)' },
	es_US_sadachbia: { language: 'es-US', gender: 'male', wav: 'es-US-Chirp3-HD-Sadachbia', text: 'Spanish (US) Sadachbia (Chirp3-HD)' },
	es_US_sadaltager: { language: 'es-US', gender: 'male', wav: 'es-US-Chirp3-HD-Sadaltager', text: 'Spanish (US) Sadaltager (Chirp3-HD)' },
	es_US_schedar: { language: 'es-US', gender: 'male', wav: 'es-US-Chirp3-HD-Schedar', text: 'Spanish (US) Schedar (Chirp3-HD)' },
	es_US_sulafat: { language: 'es-US', gender: 'female', wav: 'es-US-Chirp3-HD-Sulafat', text: 'Spanish (US) Sulafat (Chirp3-HD)' },
	es_US_umbriel: { language: 'es-US', gender: 'male', wav: 'es-US-Chirp3-HD-Umbriel', text: 'Spanish (US) Umbriel (Chirp3-HD)' },
	es_US_vindemiatrix: { language: 'es-US', gender: 'female', wav: 'es-US-Chirp3-HD-Vindemiatrix', text: 'Spanish (US) Vindemiatrix (Chirp3-HD)' },
	es_US_zephyr: { language: 'es-US', gender: 'female', wav: 'es-US-Chirp3-HD-Zephyr', text: 'Spanish (US) Zephyr (Chirp3-HD)' },
	es_US_zubenelgenubi: { language: 'es-US', gender: 'male', wav: 'es-US-Chirp3-HD-Zubenelgenubi', text: 'Spanish (US) Zubenelgenubi (Chirp3-HD)' },
	es_US_neural2_a: { language: 'es-US', gender: 'female', wav: 'es-US-Neural2-A', text: 'Spanish (US) Neural2 A' },
	es_US_wavenet_a: { language: 'es-US', gender: 'female', wav: 'es-US-Wavenet-A', text: 'Spanish (US) Wavenet A' },
	es_US_wavenet_b: { language: 'es-US', gender: 'male', wav: 'es-US-Wavenet-B', text: 'Spanish (US) Wavenet B' },
	es_US_studio_b: { language: 'es-US', gender: 'male', wav: 'es-US-Studio-B', text: 'Spanish (US) Studio B' },

	// French France (fr-FR) Chirp3-HD + extra
	fr_FR_achernar: { language: 'fr-FR', gender: 'female', wav: 'fr-FR-Chirp3-HD-Achernar', text: 'French Achernar (Chirp3-HD)' },
	fr_FR_achird: { language: 'fr-FR', gender: 'male', wav: 'fr-FR-Chirp3-HD-Achird', text: 'French Achird (Chirp3-HD)' },
	fr_FR_algenib: { language: 'fr-FR', gender: 'male', wav: 'fr-FR-Chirp3-HD-Algenib', text: 'French Algenib (Chirp3-HD)' },
	fr_FR_algieba: { language: 'fr-FR', gender: 'male', wav: 'fr-FR-Chirp3-HD-Algieba', text: 'French Algieba (Chirp3-HD)' },
	fr_FR_alnilam: { language: 'fr-FR', gender: 'male', wav: 'fr-FR-Chirp3-HD-Alnilam', text: 'French Alnilam (Chirp3-HD)' },
	fr_FR_aoede: { language: 'fr-FR', gender: 'female', wav: 'fr-FR-Chirp3-HD-Aoede', text: 'French Aoede (Chirp3-HD)' },
	fr_FR_autonoe: { language: 'fr-FR', gender: 'female', wav: 'fr-FR-Chirp3-HD-Autonoe', text: 'French Autonoe (Chirp3-HD)' },
	fr_FR_callirrhoe: { language: 'fr-FR', gender: 'female', wav: 'fr-FR-Chirp3-HD-Callirrhoe', text: 'French Callirrhoe (Chirp3-HD)' },
	fr_FR_charon: { language: 'fr-FR', gender: 'male', wav: 'fr-FR-Chirp3-HD-Charon', text: 'French Charon (Chirp3-HD)' },
	fr_FR_despina: { language: 'fr-FR', gender: 'female', wav: 'fr-FR-Chirp3-HD-Despina', text: 'French Despina (Chirp3-HD)' },
	fr_FR_enceladus: { language: 'fr-FR', gender: 'male', wav: 'fr-FR-Chirp3-HD-Enceladus', text: 'French Enceladus (Chirp3-HD)' },
	fr_FR_erinome: { language: 'fr-FR', gender: 'female', wav: 'fr-FR-Chirp3-HD-Erinome', text: 'French Erinome (Chirp3-HD)' },
	fr_FR_fenrir: { language: 'fr-FR', gender: 'male', wav: 'fr-FR-Chirp3-HD-Fenrir', text: 'French Fenrir (Chirp3-HD)' },
	fr_FR_gacrux: { language: 'fr-FR', gender: 'female', wav: 'fr-FR-Chirp3-HD-Gacrux', text: 'French Gacrux (Chirp3-HD)' },
	fr_FR_iapetus: { language: 'fr-FR', gender: 'male', wav: 'fr-FR-Chirp3-HD-Iapetus', text: 'French Iapetus (Chirp3-HD)' },
	fr_FR_kore: { language: 'fr-FR', gender: 'female', wav: 'fr-FR-Chirp3-HD-Kore', text: 'French Kore (Chirp3-HD)' },
	fr_FR_laomedeia: { language: 'fr-FR', gender: 'female', wav: 'fr-FR-Chirp3-HD-Laomedeia', text: 'French Laomedeia (Chirp3-HD)' },
	fr_FR_leda: { language: 'fr-FR', gender: 'female', wav: 'fr-FR-Chirp3-HD-Leda', text: 'French Leda (Chirp3-HD)' },
	fr_FR_orus: { language: 'fr-FR', gender: 'male', wav: 'fr-FR-Chirp3-HD-Orus', text: 'French Orus (Chirp3-HD)' },
	fr_FR_puck: { language: 'fr-FR', gender: 'male', wav: 'fr-FR-Chirp3-HD-Puck', text: 'French Puck (Chirp3-HD)' },
	fr_FR_pulcherrima: { language: 'fr-FR', gender: 'female', wav: 'fr-FR-Chirp3-HD-Pulcherrima', text: 'French Pulcherrima (Chirp3-HD)' },
	fr_FR_rasalgethi: { language: 'fr-FR', gender: 'male', wav: 'fr-FR-Chirp3-HD-Rasalgethi', text: 'French Rasalgethi (Chirp3-HD)' },
	fr_FR_sadachbia: { language: 'fr-FR', gender: 'male', wav: 'fr-FR-Chirp3-HD-Sadachbia', text: 'French Sadachbia (Chirp3-HD)' },
	fr_FR_sadaltager: { language: 'fr-FR', gender: 'male', wav: 'fr-FR-Chirp3-HD-Sadaltager', text: 'French Sadaltager (Chirp3-HD)' },
	fr_FR_schedar: { language: 'fr-FR', gender: 'male', wav: 'fr-FR-Chirp3-HD-Schedar', text: 'French Schedar (Chirp3-HD)' },
	fr_FR_sulafat: { language: 'fr-FR', gender: 'female', wav: 'fr-FR-Chirp3-HD-Sulafat', text: 'French Sulafat (Chirp3-HD)' },
	fr_FR_umbriel: { language: 'fr-FR', gender: 'male', wav: 'fr-FR-Chirp3-HD-Umbriel', text: 'French Umbriel (Chirp3-HD)' },
	fr_FR_vindemiatrix: { language: 'fr-FR', gender: 'female', wav: 'fr-FR-Chirp3-HD-Vindemiatrix', text: 'French Vindemiatrix (Chirp3-HD)' },
	fr_FR_zephyr: { language: 'fr-FR', gender: 'female', wav: 'fr-FR-Chirp3-HD-Zephyr', text: 'French Zephyr (Chirp3-HD)' },
	fr_FR_zubenelgenubi: { language: 'fr-FR', gender: 'male', wav: 'fr-FR-Chirp3-HD-Zubenelgenubi', text: 'French Zubenelgenubi (Chirp3-HD)' },
	fr_FR_neural2_f: { language: 'fr-FR', gender: 'female', wav: 'fr-FR-Neural2-F', text: 'French Neural2 F' },
	fr_FR_neural2_g: { language: 'fr-FR', gender: 'male', wav: 'fr-FR-Neural2-G', text: 'French Neural2 G' },
	fr_FR_studio_a: { language: 'fr-FR', gender: 'female', wav: 'fr-FR-Studio-A', text: 'French Studio A' },
	fr_FR_studio_d: { language: 'fr-FR', gender: 'male', wav: 'fr-FR-Studio-D', text: 'French Studio D' },

	// Italian (it-IT) Chirp3-HD + extra
	it_IT_achernar: { language: 'it-IT', gender: 'female', wav: 'it-IT-Chirp3-HD-Achernar', text: 'Italian Achernar (Chirp3-HD)' },
	it_IT_achird: { language: 'it-IT', gender: 'male', wav: 'it-IT-Chirp3-HD-Achird', text: 'Italian Achird (Chirp3-HD)' },
	it_IT_algenib: { language: 'it-IT', gender: 'male', wav: 'it-IT-Chirp3-HD-Algenib', text: 'Italian Algenib (Chirp3-HD)' },
	it_IT_algieba: { language: 'it-IT', gender: 'male', wav: 'it-IT-Chirp3-HD-Algieba', text: 'Italian Algieba (Chirp3-HD)' },
	it_IT_alnilam: { language: 'it-IT', gender: 'male', wav: 'it-IT-Chirp3-HD-Alnilam', text: 'Italian Alnilam (Chirp3-HD)' },
	it_IT_aoede: { language: 'it-IT', gender: 'female', wav: 'it-IT-Chirp3-HD-Aoede', text: 'Italian Aoede (Chirp3-HD)' },
	it_IT_autonoe: { language: 'it-IT', gender: 'female', wav: 'it-IT-Chirp3-HD-Autonoe', text: 'Italian Autonoe (Chirp3-HD)' },
	it_IT_callirrhoe: { language: 'it-IT', gender: 'female', wav: 'it-IT-Chirp3-HD-Callirrhoe', text: 'Italian Callirrhoe (Chirp3-HD)' },
	it_IT_charon: { language: 'it-IT', gender: 'male', wav: 'it-IT-Chirp3-HD-Charon', text: 'Italian Charon (Chirp3-HD)' },
	it_IT_despina: { language: 'it-IT', gender: 'female', wav: 'it-IT-Chirp3-HD-Despina', text: 'Italian Despina (Chirp3-HD)' },
	it_IT_enceladus: { language: 'it-IT', gender: 'male', wav: 'it-IT-Chirp3-HD-Enceladus', text: 'Italian Enceladus (Chirp3-HD)' },
	it_IT_erinome: { language: 'it-IT', gender: 'female', wav: 'it-IT-Chirp3-HD-Erinome', text: 'Italian Erinome (Chirp3-HD)' },
	it_IT_fenrir: { language: 'it-IT', gender: 'male', wav: 'it-IT-Chirp3-HD-Fenrir', text: 'Italian Fenrir (Chirp3-HD)' },
	it_IT_gacrux: { language: 'it-IT', gender: 'female', wav: 'it-IT-Chirp3-HD-Gacrux', text: 'Italian Gacrux (Chirp3-HD)' },
	it_IT_iapetus: { language: 'it-IT', gender: 'male', wav: 'it-IT-Chirp3-HD-Iapetus', text: 'Italian Iapetus (Chirp3-HD)' },
	it_IT_kore: { language: 'it-IT', gender: 'female', wav: 'it-IT-Chirp3-HD-Kore', text: 'Italian Kore (Chirp3-HD)' },
	it_IT_laomedeia: { language: 'it-IT', gender: 'female', wav: 'it-IT-Chirp3-HD-Laomedeia', text: 'Italian Laomedeia (Chirp3-HD)' },
	it_IT_leda: { language: 'it-IT', gender: 'female', wav: 'it-IT-Chirp3-HD-Leda', text: 'Italian Leda (Chirp3-HD)' },
	it_IT_orus: { language: 'it-IT', gender: 'male', wav: 'it-IT-Chirp3-HD-Orus', text: 'Italian Orus (Chirp3-HD)' },
	it_IT_puck: { language: 'it-IT', gender: 'male', wav: 'it-IT-Chirp3-HD-Puck', text: 'Italian Puck (Chirp3-HD)' },
	it_IT_pulcherrima: { language: 'it-IT', gender: 'female', wav: 'it-IT-Chirp3-HD-Pulcherrima', text: 'Italian Pulcherrima (Chirp3-HD)' },
	it_IT_rasalgethi: { language: 'it-IT', gender: 'male', wav: 'it-IT-Chirp3-HD-Rasalgethi', text: 'Italian Rasalgethi (Chirp3-HD)' },
	it_IT_sadachbia: { language: 'it-IT', gender: 'male', wav: 'it-IT-Chirp3-HD-Sadachbia', text: 'Italian Sadachbia (Chirp3-HD)' },
	it_IT_sadaltager: { language: 'it-IT', gender: 'male', wav: 'it-IT-Chirp3-HD-Sadaltager', text: 'Italian Sadaltager (Chirp3-HD)' },
	it_IT_schedar: { language: 'it-IT', gender: 'male', wav: 'it-IT-Chirp3-HD-Schedar', text: 'Italian Schedar (Chirp3-HD)' },
	it_IT_sulafat: { language: 'it-IT', gender: 'female', wav: 'it-IT-Chirp3-HD-Sulafat', text: 'Italian Sulafat (Chirp3-HD)' },
	it_IT_umbriel: { language: 'it-IT', gender: 'male', wav: 'it-IT-Chirp3-HD-Umbriel', text: 'Italian Umbriel (Chirp3-HD)' },
	it_IT_vindemiatrix: { language: 'it-IT', gender: 'female', wav: 'it-IT-Chirp3-HD-Vindemiatrix', text: 'Italian Vindemiatrix (Chirp3-HD)' },
	it_IT_zephyr: { language: 'it-IT', gender: 'female', wav: 'it-IT-Chirp3-HD-Zephyr', text: 'Italian Zephyr (Chirp3-HD)' },
	it_IT_zubenelgenubi: { language: 'it-IT', gender: 'male', wav: 'it-IT-Chirp3-HD-Zubenelgenubi', text: 'Italian Zubenelgenubi (Chirp3-HD)' },
	it_IT_neural2_a: { language: 'it-IT', gender: 'female', wav: 'it-IT-Neural2-A', text: 'Italian Neural2 A' },
	it_IT_wavenet_e: { language: 'it-IT', gender: 'female', wav: 'it-IT-Wavenet-E', text: 'Italian Wavenet E' },
	it_IT_wavenet_f: { language: 'it-IT', gender: 'male', wav: 'it-IT-Wavenet-F', text: 'Italian Wavenet F' },

	// Portuguese Brazil (pt-BR)
	pt_BR_achernar: { language: 'pt-BR', gender: 'female', wav: 'pt-BR-Chirp3-HD-Achernar', text: 'Portuguese (BR) Achernar (Chirp3-HD)' },
	pt_BR_achird: { language: 'pt-BR', gender: 'male', wav: 'pt-BR-Chirp3-HD-Achird', text: 'Portuguese (BR) Achird (Chirp3-HD)' },
	pt_BR_algenib: { language: 'pt-BR', gender: 'male', wav: 'pt-BR-Chirp3-HD-Algenib', text: 'Portuguese (BR) Algenib (Chirp3-HD)' },
	pt_BR_algieba: { language: 'pt-BR', gender: 'male', wav: 'pt-BR-Chirp3-HD-Algieba', text: 'Portuguese (BR) Algieba (Chirp3-HD)' },
	pt_BR_alnilam: { language: 'pt-BR', gender: 'male', wav: 'pt-BR-Chirp3-HD-Alnilam', text: 'Portuguese (BR) Alnilam (Chirp3-HD)' },
	pt_BR_aoede: { language: 'pt-BR', gender: 'female', wav: 'pt-BR-Chirp3-HD-Aoede', text: 'Portuguese (BR) Aoede (Chirp3-HD)' },
	pt_BR_autonoe: { language: 'pt-BR', gender: 'female', wav: 'pt-BR-Chirp3-HD-Autonoe', text: 'Portuguese (BR) Autonoe (Chirp3-HD)' },
	pt_BR_callirrhoe: { language: 'pt-BR', gender: 'female', wav: 'pt-BR-Chirp3-HD-Callirrhoe', text: 'Portuguese (BR) Callirrhoe (Chirp3-HD)' },
	pt_BR_charon: { language: 'pt-BR', gender: 'male', wav: 'pt-BR-Chirp3-HD-Charon', text: 'Portuguese (BR) Charon (Chirp3-HD)' },
	pt_BR_despina: { language: 'pt-BR', gender: 'female', wav: 'pt-BR-Chirp3-HD-Despina', text: 'Portuguese (BR) Despina (Chirp3-HD)' },
	pt_BR_enceladus: { language: 'pt-BR', gender: 'male', wav: 'pt-BR-Chirp3-HD-Enceladus', text: 'Portuguese (BR) Enceladus (Chirp3-HD)' },
	pt_BR_erinome: { language: 'pt-BR', gender: 'female', wav: 'pt-BR-Chirp3-HD-Erinome', text: 'Portuguese (BR) Erinome (Chirp3-HD)' },
	pt_BR_fenrir: { language: 'pt-BR', gender: 'male', wav: 'pt-BR-Chirp3-HD-Fenrir', text: 'Portuguese (BR) Fenrir (Chirp3-HD)' },
	pt_BR_gacrux: { language: 'pt-BR', gender: 'female', wav: 'pt-BR-Chirp3-HD-Gacrux', text: 'Portuguese (BR) Gacrux (Chirp3-HD)' },
	pt_BR_iapetus: { language: 'pt-BR', gender: 'male', wav: 'pt-BR-Chirp3-HD-Iapetus', text: 'Portuguese (BR) Iapetus (Chirp3-HD)' },
	pt_BR_kore: { language: 'pt-BR', gender: 'female', wav: 'pt-BR-Chirp3-HD-Kore', text: 'Portuguese (BR) Kore (Chirp3-HD)' },
	pt_BR_laomedeia: { language: 'pt-BR', gender: 'female', wav: 'pt-BR-Chirp3-HD-Laomedeia', text: 'Portuguese (BR) Laomedeia (Chirp3-HD)' },
	pt_BR_leda: { language: 'pt-BR', gender: 'female', wav: 'pt-BR-Chirp3-HD-Leda', text: 'Portuguese (BR) Leda (Chirp3-HD)' },
	pt_BR_orus: { language: 'pt-BR', gender: 'male', wav: 'pt-BR-Chirp3-HD-Orus', text: 'Portuguese (BR) Orus (Chirp3-HD)' },
	pt_BR_puck: { language: 'pt-BR', gender: 'male', wav: 'pt-BR-Chirp3-HD-Puck', text: 'Portuguese (BR) Puck (Chirp3-HD)' },
	pt_BR_pulcherrima: { language: 'pt-BR', gender: 'female', wav: 'pt-BR-Chirp3-HD-Pulcherrima', text: 'Portuguese (BR) Pulcherrima (Chirp3-HD)' },
	pt_BR_rasalgethi: { language: 'pt-BR', gender: 'male', wav: 'pt-BR-Chirp3-HD-Rasalgethi', text: 'Portuguese (BR) Rasalgethi (Chirp3-HD)' },
	pt_BR_sadachbia: { language: 'pt-BR', gender: 'male', wav: 'pt-BR-Chirp3-HD-Sadachbia', text: 'Portuguese (BR) Sadachbia (Chirp3-HD)' },
	pt_BR_sadaltager: { language: 'pt-BR', gender: 'male', wav: 'pt-BR-Chirp3-HD-Sadaltager', text: 'Portuguese (BR) Sadaltager (Chirp3-HD)' },
	pt_BR_schedar: { language: 'pt-BR', gender: 'male', wav: 'pt-BR-Chirp3-HD-Schedar', text: 'Portuguese (BR) Schedar (Chirp3-HD)' },
	pt_BR_sulafat: { language: 'pt-BR', gender: 'female', wav: 'pt-BR-Chirp3-HD-Sulafat', text: 'Portuguese (BR) Sulafat (Chirp3-HD)' },
	pt_BR_umbriel: { language: 'pt-BR', gender: 'male', wav: 'pt-BR-Chirp3-HD-Umbriel', text: 'Portuguese (BR) Umbriel (Chirp3-HD)' },
	pt_BR_vindemiatrix: { language: 'pt-BR', gender: 'female', wav: 'pt-BR-Chirp3-HD-Vindemiatrix', text: 'Portuguese (BR) Vindemiatrix (Chirp3-HD)' },
	pt_BR_zephyr: { language: 'pt-BR', gender: 'female', wav: 'pt-BR-Chirp3-HD-Zephyr', text: 'Portuguese (BR) Zephyr (Chirp3-HD)' },
	pt_BR_zubenelgenubi: { language: 'pt-BR', gender: 'male', wav: 'pt-BR-Chirp3-HD-Zubenelgenubi', text: 'Portuguese (BR) Zubenelgenubi (Chirp3-HD)' },
	pt_BR_neural2_a: { language: 'pt-BR', gender: 'female', wav: 'pt-BR-Neural2-A', text: 'Portuguese (BR) Neural2 A' },
	pt_BR_wavenet_a: { language: 'pt-BR', gender: 'female', wav: 'pt-BR-Wavenet-A', text: 'Portuguese (BR) Wavenet A' },
	pt_BR_wavenet_b: { language: 'pt-BR', gender: 'male', wav: 'pt-BR-Wavenet-B', text: 'Portuguese (BR) Wavenet B' },

	// Czech (cs-CZ) Chirp3-HD
	cs_CZ_achernar: { language: 'cs-CZ', gender: 'female', wav: 'cs-CZ-Chirp3-HD-Achernar', text: 'Czech Achernar (Chirp3-HD)' },
	cs_CZ_achird: { language: 'cs-CZ', gender: 'male', wav: 'cs-CZ-Chirp3-HD-Achird', text: 'Czech Achird (Chirp3-HD)' },
	cs_CZ_algenib: { language: 'cs-CZ', gender: 'male', wav: 'cs-CZ-Chirp3-HD-Algenib', text: 'Czech Algenib (Chirp3-HD)' },
	cs_CZ_algieba: { language: 'cs-CZ', gender: 'male', wav: 'cs-CZ-Chirp3-HD-Algieba', text: 'Czech Algieba (Chirp3-HD)' },
	cs_CZ_alnilam: { language: 'cs-CZ', gender: 'male', wav: 'cs-CZ-Chirp3-HD-Alnilam', text: 'Czech Alnilam (Chirp3-HD)' },
	cs_CZ_aoede: { language: 'cs-CZ', gender: 'female', wav: 'cs-CZ-Chirp3-HD-Aoede', text: 'Czech Aoede (Chirp3-HD)' },
	cs_CZ_autonoe: { language: 'cs-CZ', gender: 'female', wav: 'cs-CZ-Chirp3-HD-Autonoe', text: 'Czech Autonoe (Chirp3-HD)' },
	cs_CZ_callirrhoe: { language: 'cs-CZ', gender: 'female', wav: 'cs-CZ-Chirp3-HD-Callirrhoe', text: 'Czech Callirrhoe (Chirp3-HD)' },
	cs_CZ_charon: { language: 'cs-CZ', gender: 'male', wav: 'cs-CZ-Chirp3-HD-Charon', text: 'Czech Charon (Chirp3-HD)' },
	cs_CZ_despina: { language: 'cs-CZ', gender: 'female', wav: 'cs-CZ-Chirp3-HD-Despina', text: 'Czech Despina (Chirp3-HD)' },
	cs_CZ_enceladus: { language: 'cs-CZ', gender: 'male', wav: 'cs-CZ-Chirp3-HD-Enceladus', text: 'Czech Enceladus (Chirp3-HD)' },
	cs_CZ_erinome: { language: 'cs-CZ', gender: 'female', wav: 'cs-CZ-Chirp3-HD-Erinome', text: 'Czech Erinome (Chirp3-HD)' },
	cs_CZ_fenrir: { language: 'cs-CZ', gender: 'male', wav: 'cs-CZ-Chirp3-HD-Fenrir', text: 'Czech Fenrir (Chirp3-HD)' },
	cs_CZ_gacrux: { language: 'cs-CZ', gender: 'female', wav: 'cs-CZ-Chirp3-HD-Gacrux', text: 'Czech Gacrux (Chirp3-HD)' },
	cs_CZ_iapetus: { language: 'cs-CZ', gender: 'male', wav: 'cs-CZ-Chirp3-HD-Iapetus', text: 'Czech Iapetus (Chirp3-HD)' },
	cs_CZ_kore: { language: 'cs-CZ', gender: 'female', wav: 'cs-CZ-Chirp3-HD-Kore', text: 'Czech Kore (Chirp3-HD)' },
	cs_CZ_laomedeia: { language: 'cs-CZ', gender: 'female', wav: 'cs-CZ-Chirp3-HD-Laomedeia', text: 'Czech Laomedeia (Chirp3-HD)' },
	cs_CZ_leda: { language: 'cs-CZ', gender: 'female', wav: 'cs-CZ-Chirp3-HD-Leda', text: 'Czech Leda (Chirp3-HD)' },
	cs_CZ_orus: { language: 'cs-CZ', gender: 'male', wav: 'cs-CZ-Chirp3-HD-Orus', text: 'Czech Orus (Chirp3-HD)' },
	cs_CZ_puck: { language: 'cs-CZ', gender: 'male', wav: 'cs-CZ-Chirp3-HD-Puck', text: 'Czech Puck (Chirp3-HD)' },
	cs_CZ_pulcherrima: { language: 'cs-CZ', gender: 'female', wav: 'cs-CZ-Chirp3-HD-Pulcherrima', text: 'Czech Pulcherrima (Chirp3-HD)' },
	cs_CZ_rasalgethi: { language: 'cs-CZ', gender: 'male', wav: 'cs-CZ-Chirp3-HD-Rasalgethi', text: 'Czech Rasalgethi (Chirp3-HD)' },
	cs_CZ_sadachbia: { language: 'cs-CZ', gender: 'male', wav: 'cs-CZ-Chirp3-HD-Sadachbia', text: 'Czech Sadachbia (Chirp3-HD)' },
	cs_CZ_sadaltager: { language: 'cs-CZ', gender: 'male', wav: 'cs-CZ-Chirp3-HD-Sadaltager', text: 'Czech Sadaltager (Chirp3-HD)' },
	cs_CZ_schedar: { language: 'cs-CZ', gender: 'male', wav: 'cs-CZ-Chirp3-HD-Schedar', text: 'Czech Schedar (Chirp3-HD)' },
	cs_CZ_sulafat: { language: 'cs-CZ', gender: 'female', wav: 'cs-CZ-Chirp3-HD-Sulafat', text: 'Czech Sulafat (Chirp3-HD)' },
	cs_CZ_umbriel: { language: 'cs-CZ', gender: 'male', wav: 'cs-CZ-Chirp3-HD-Umbriel', text: 'Czech Umbriel (Chirp3-HD)' },
	cs_CZ_vindemiatrix: { language: 'cs-CZ', gender: 'female', wav: 'cs-CZ-Chirp3-HD-Vindemiatrix', text: 'Czech Vindemiatrix (Chirp3-HD)' },
	cs_CZ_zephyr: { language: 'cs-CZ', gender: 'female', wav: 'cs-CZ-Chirp3-HD-Zephyr', text: 'Czech Zephyr (Chirp3-HD)' },
	cs_CZ_zubenelgenubi: { language: 'cs-CZ', gender: 'male', wav: 'cs-CZ-Chirp3-HD-Zubenelgenubi', text: 'Czech Zubenelgenubi (Chirp3-HD)' },
	cs_CZ_wavenet_b: { language: 'cs-CZ', gender: 'female', wav: 'cs-CZ-Wavenet-B', text: 'Czech Wavenet B' },

	// Russian (ru-RU) Chirp3-HD (8 in docs)
	ru_RU_aoede: { language: 'ru-RU', gender: 'female', wav: 'ru-RU-Chirp3-HD-Aoede', text: 'Russian Aoede (Chirp3-HD)' },
	ru_RU_charon: { language: 'ru-RU', gender: 'male', wav: 'ru-RU-Chirp3-HD-Charon', text: 'Russian Charon (Chirp3-HD)' },
	ru_RU_fenrir: { language: 'ru-RU', gender: 'male', wav: 'ru-RU-Chirp3-HD-Fenrir', text: 'Russian Fenrir (Chirp3-HD)' },
	ru_RU_kore: { language: 'ru-RU', gender: 'female', wav: 'ru-RU-Chirp3-HD-Kore', text: 'Russian Kore (Chirp3-HD)' },
	ru_RU_leda: { language: 'ru-RU', gender: 'female', wav: 'ru-RU-Chirp3-HD-Leda', text: 'Russian Leda (Chirp3-HD)' },
	ru_RU_orus: { language: 'ru-RU', gender: 'male', wav: 'ru-RU-Chirp3-HD-Orus', text: 'Russian Orus (Chirp3-HD)' },
	ru_RU_puck: { language: 'ru-RU', gender: 'male', wav: 'ru-RU-Chirp3-HD-Puck', text: 'Russian Puck (Chirp3-HD)' },
	ru_RU_zephyr: { language: 'ru-RU', gender: 'female', wav: 'ru-RU-Chirp3-HD-Zephyr', text: 'Russian Zephyr (Chirp3-HD)' },
	ru_RU_wavenet_c: { language: 'ru-RU', gender: 'female', wav: 'ru-RU-Wavenet-C', text: 'Russian Wavenet C' },
	ru_RU_wavenet_d: { language: 'ru-RU', gender: 'male', wav: 'ru-RU-Wavenet-D', text: 'Russian Wavenet D' },

	// Arabic (ar-XA) Standard + Wavenet B,D
	ar_XA_standard_a: { language: 'ar-XA', gender: 'female', wav: 'ar-XA-Standard-A', text: 'Arabic Standard A' },
	ar_XA_standard_b: { language: 'ar-XA', gender: 'male', wav: 'ar-XA-Standard-B', text: 'Arabic Standard B' },
	ar_XA_wavenet_b: { language: 'ar-XA', gender: 'male', wav: 'ar-XA-Wavenet-B', text: 'Arabic Wavenet B' },
	ar_XA_wavenet_d: { language: 'ar-XA', gender: 'female', wav: 'ar-XA-Wavenet-D', text: 'Arabic Wavenet D' },

	// New languages: Bulgarian, Catalan, Hebrew, Romanian, Thai
	bg_BG_standard_b: { language: 'bg-BG', gender: 'female', wav: 'bg-BG-Standard-B', text: 'Bulgarian Standard B' },
	ca_ES_standard_b: { language: 'ca-ES', gender: 'female', wav: 'ca-ES-Standard-B', text: 'Catalan Standard B' },
	he_IL_standard_a: { language: 'he-IL', gender: 'female', wav: 'he-IL-Standard-A', text: 'Hebrew Standard A' },
	he_IL_wavenet_a: { language: 'he-IL', gender: 'female', wav: 'he-IL-Wavenet-A', text: 'Hebrew Wavenet A' },
	ro_RO_standard_b: { language: 'ro-RO', gender: 'female', wav: 'ro-RO-Standard-B', text: 'Romanian Standard B' },
	ro_RO_wavenet_b: { language: 'ro-RO', gender: 'female', wav: 'ro-RO-Wavenet-B', text: 'Romanian Wavenet B' },
	th_TH_neural2_c: { language: 'th-TH', gender: 'female', wav: 'th-TH-Neural2-C', text: 'Thai Neural2 C' },
	th_TH_standard_a: { language: 'th-TH', gender: 'female', wav: 'th-TH-Standard-A', text: 'Thai Standard A' }
};

// Build voices-by-language for editor (language selector + voice selector)
const LANGUAGE_NAMES = {
	'da-DK': 'Danish', 'nl-Nl': 'Dutch', 'en-AU': 'English (Australia)', 'en-GB': 'English (UK)',
	'en-US': 'English (US)', 'ar-XA': 'Arabic', 'bg-BG': 'Bulgarian', 'ca-ES': 'Catalan',
	'cmn-CN': 'Chinese (Mandarin)', 'cs-CZ': 'Czech', 'de-DE': 'German', 'el-GR': 'Greek',
	'en-IN': 'English (India)', 'es-ES': 'Spanish (Spain)', 'es-US': 'Spanish (US)',
	'fi-FI': 'Finnish', 'fil-PH': 'Filipino', 'fr-CA': 'French (Canada)', 'fr-FR': 'French (France)',
	'he-IL': 'Hebrew', 'hi-IN': 'Hindi', 'hu-HU': 'Hungarian', 'id-ID': 'Indonesian',
	'it-IT': 'Italian', 'ja-JP': 'Japanese', 'ko-KR': 'Korean', 'nb-NO': 'Norwegian',
	'pl-PL': 'Polish', 'pt-BR': 'Portuguese (Brazil)', 'pt-PT': 'Portuguese (Portugal)',
	'ro-RO': 'Romanian', 'ru-RU': 'Russian', 'sk-SK': 'Slovak', 'sv-SE': 'Swedish',
	'th-TH': 'Thai', 'tr-TR': 'Turkish', 'uk-UA': 'Ukrainian', 'vi-VN': 'Vietnamese'
};
function getVoicesByLanguage() {
	const byLang = {};
	const voiceToLang = {};
	for (const [key, v] of Object.entries(voice_options)) {
		const lang = v.language;
		if (!byLang[lang]) byLang[lang] = [];
		byLang[lang].push({ value: key, text: v.text });
		voiceToLang[key] = lang;
	}
	return { byLang, voiceToLang };
}

const makeHttpCall = async (options) => {
	try {
		return new Promise((resolve) => {
			var req = https.request(options, res => {
				res.setEncoding('utf8');
				var returnData = '';
				res.on('data', chunk => {
					returnData = returnData + chunk;
				});
				res.on('end', () => {
					let results = JSON.parse(returnData);
					resolve(results);
				});
			});
			if (options.method == 'POST' || options.method == 'PATCH') {
				req.write(JSON.stringify(options.body));
			}
			req.end();
		})
	} catch (error) {
		return `error: ` + error;
	}
}

// Get a random item
const randomItem = (arrayOfItems) => {
	let i = 0;
	i = Math.floor(Math.random() * arrayOfItems.length);
	return (arrayOfItems[i]);
};

const getVoice = (voice) => {
	if (voice == 'random') {
		voice = randomItem(Object.keys(voice_options));
	} else if (voice == 'random_pl') {
		const polishKeys = Object.keys(voice_options).filter(k => voice_options[k].language === 'pl-PL');
		voice = randomItem(polishKeys.length ? polishKeys : Object.keys(voice_options));
	}
	let chosen = voice_options[voice];
	if (!chosen) {
		// Unknown key: treat as 'random' to avoid crash
		voice = randomItem(Object.keys(voice_options));
		chosen = voice_options[voice];
	}
	let data = {
		languageCode: chosen.language,
		ssmlGender: chosen.gender,
		name: chosen.wav
	}
	return data;
}

const getAudioFile = async (txt, data) => {

	let options = {
		host: 'texttospeech.googleapis.com',
		port: 443,
		path: '/v1/text:synthesize',
		// path: '/v1/voices',
		headers: {
			'Content-Type': 'application/json',
			'charset': 'utf-8',
			'X-Goog-Api-Key': `${data.key}`
		},
		body: {
			'input': {
				'ssml': `<speak>${txt}</speak>`
			},
			'voice': {
				'languageCode': data.languageCode,
				'name': data.name,
				'ssmlGender': data.ssmlGender
			},
			'audioConfig': {
				'speakingRate': data.config.rate,
				'pitch': data.config.pitch,
				'volumeGainDb': data.config.volume,
				'sampleRateHertz': data.config.sample,
				'audioEncoding': data.config.encoding,
			}
		},
		method: 'POST'
	};

	// console.log(`options: ${JSON.stringify(options, null, 2)}`);
	let resp = await makeHttpCall(options);
	if (resp.error) {
		return { error: resp.error.message };
	} else {
		return resp.audioContent;
	}
}

const getAllVoices = async (key) => {

	let options = {
		host: 'texttospeech.googleapis.com',
		port: 443,
		path: '/v1/voices',
		headers: {
			'Content-Type': 'application/json',
			'charset': 'utf-8',
			'X-Goog-Api-Key': `${key}`
		},
		method: 'GET'
	};

	// console.log(`options: ${JSON.stringify(options, null, 2)}`);
	let resp = await makeHttpCall(options);
	if (resp.error) {
		return { error: resp.error.message };
	} else {
		return resp.audioContent;
	}
}

module.exports = function (RED) {
	function WavenetNode(config) {
		RED.nodes.createNode(this, config);
		var regexp = new RegExp('^[A-Za-z0-9+\/=]*$');
		var node = this;
		node.on('input', function (msg) {
			let key = RED.nodes.getNode(config.key);
			let txt = msg.payload;

			//Checks to see if the msg contains any overriding values before defaulting to config
			// msg.voice can be a string key (e.g. "joanna", "pl_achernar", "random") from the dropdown
			let voice = msg.voice != null ? getVoice(msg.voice) : getVoice(config.voice);

			// get audio config options
			voice.config = {
				rate: msg.rate != null ? msg.rate : config.rate,
				pitch: msg.pitch != null ? msg.pitch : config.pitch,
				volume: msg.volume != null ? msg.volume : config.volume,
				sample: msg.sample != null ? msg.sample : config.sample,
				encoding: msg.encoding != null ? msg.encoding : config.encoding
			}

			voice.key = key.speech_api;

			let audioContent = getAudioFile(txt, voice);
			audioContent.then((value) => {
				if (value.error) {
					node.status({ fill: 'red', shape: 'ring', text: 'API error' });
					node.error(value.error);
				} else {
					try {
						var load = value.replace(/\s+/g, '');      // remove any whitespace
						if (regexp.test(load) && (load.length % 4 === 0)) {
							value = Buffer.from(load, 'base64');
							node.status({ fill: 'green', shape: 'dot', text: `${voice.languageCode} - ${voice.ssmlGender}` });
							msg.payload = value;
							// msg.voice = voice;
							node.send(msg);
						}
						else {
							node.log('Not a Base64 string');
							value = Buffer.from(value).toString('base64');
							node.status({ fill: 'green', shape: 'ring', text: `${voice.languageCode} - ${voice.ssmlGender}` });
							msg.payload = value;
							// RED.util.setMessageProperty(msg, node.property, value);
							node.send(msg);
						}
					} catch (error) {
						node.status({ fill: 'red', shape: 'dot', text: 'error' });
						node.error(error);
					}
				}
			});
		});
	}

	RED.nodes.registerType('wavenet', WavenetNode);

	function WavenetConfigNode(n) {
		RED.nodes.createNode(this, n);
		this.speech_api = n.speech_api;
	}
	RED.nodes.registerType('wavenet-config', WavenetConfigNode);
}