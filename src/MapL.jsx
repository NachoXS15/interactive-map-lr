import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
export default function MapL() {

    const colors = [
        '#e63946', '#f1faee', '#a8dadc', '#457b9d', '#1d3557',
        '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51', '#264653'
    ];

    return (
        <div className="w-hit min-h-screen m-auto bg-blue-950">
            <ComposableMap
                style={{
                    margin: '0 auto',
                    textAlign: 'center'
                }}
                projection="geoMercator"
                projectionConfig={{
                    scale: 5000,
                    center: [-66.5, -29.4],
                }}>

                <Geographies
                    stroke='#fff'
                    fill='#292d3e'
                    geography="https://raw.githubusercontent.com/mgaitan/departamentos_argentina/master/departamentos-la_rioja.json"
                >
                    {({ geographies }) =>
                        geographies.map((geo, index) => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                style={{
                                    hover: {
                                        fill: colors[index % colors.length]
                                    }
                                }}
                            />
                        ))
                    }
                </Geographies>
            </ComposableMap>
        </div>
    )
}
