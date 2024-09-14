import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
export default function MapL() {

    return (
        <div className="w-hit min-h-screen m-auto bg-blue-950">
            <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                    scale: 4000,
                    center: [-66.5, -29.4], // Coordenadas aproximadas de La Rioja, Argentina
                }}>
                
                <Geographies stroke='#fff' fill='#292d3e' geography="https://raw.githubusercontent.com/mgaitan/departamentos_argentina/master/departamentos-la_rioja.json">
                    {({ geographies }) =>
                        geographies.map((geo, index) => (
                            <Geography key={index} geography={geo} />
                        ))
                    }
                </Geographies>
            </ComposableMap>
        </div>
    )
}
