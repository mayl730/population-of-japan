export async function prefCodeToPrefName(prefCode: number) {
    const response = await fetch("/pref_code_name.json");
    const prefCodeJson = await response.json();
    // console.log(prefCodeJson[prefCode]);
    return prefCodeJson[prefCode];
}
