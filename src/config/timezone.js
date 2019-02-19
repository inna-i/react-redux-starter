import moment from 'moment-timezone';

const getTimeZoneData = () => {
	const timezoneData = [];
	const timezoneKey = [];
	const cities = moment.tz.names();
	const regions = ['Africa', 'America', 'Asia', 'Atlantic',
		'Australia', 'Europe', 'Indian', 'Pacific'];
	cities.forEach(name => {
		const region = name.includes('/') ? name.split('/')[0] : name;
		if (regions.includes(region)) {
			const offset = moment.tz(name).format('Z');
			const label = `(${offset}) ${name}`;
			timezoneData.push(label);
			timezoneKey.push(name);
		}
	});

	return [timezoneData, timezoneKey];
};

export default getTimeZoneData;
