/**
 * Transforme les données brutes de l'API Open-Meteo
 * en un format simple et lisible pour n8n.
 * @param {any} openMeteoJson
 * @returns {{date:string,temp_max:string,temp_min:string,pluie:string,vent:string}}
 */
function formatWeatherFields(openMeteoJson) {
  const d = openMeteoJson?.daily || {};
  return {
    date: (d.time && d.time[0]) || "",
    temp_max: (d.temperature_2m_max && `${d.temperature_2m_max[0]}°C`) || "N/A",
    temp_min: (d.temperature_2m_min && `${d.temperature_2m_min[0]}°C`) || "N/A",
    pluie: (d.precipitation_sum && `${d.precipitation_sum[0]} mm`) || "0 mm",
    vent: (d.wind_speed_10m_max && `${d.wind_speed_10m_max[0]} km/h`) || "0 km/h",
  };
}

// ✅ Exemple d’utilisation dans n8n (Code node)
// const out = formatWeatherFields(items[0].json);
// return [{ json: out }];
