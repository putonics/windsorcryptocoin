import React from 'react'

/**
 * @param {{symbol: string, name: string, logoURL: string}} props 
 * @returns 
 */
const Symbol = props => {

    const [state, setState] = React.useState({ openPrice: 0.0, lastPrice: 0.0, percent: 0.0 })
    const [problem, setProblem] = React.useState(false)

    React.useEffect(() => {
        return setInterval(() => {
            fetch("https://www.binance.com/api/v3/ticker/24hr?symbol=" + props.symbol + "BUSD")
                .then(response => response.json())
                .catch(er => setProblem(true))
                .then(json => {
                    setState({ openPrice: parseFloat(json.openPrice), lastPrice: parseFloat(json.lastPrice), percent: 100 * (parseFloat(json.lastPrice) - parseFloat(json.openPrice)) / parseFloat(json.lastPrice) })
                    setProblem(false)
                })
                .catch(er => setProblem(true))
        }, 2000)
    }, [])

    /* <span style={{ color: '#ffffff', padding: 4, border: '1px solid #00000000', borderRadius: 20, backgroundColor: state.lastPrice < state.openPrice ? '#dd0000' : '#00dd66', fontWeight: 700, marginRight: 4 }}>{typeof (state.percent) === 'number' ? state.percent.toFixed(2) : state.percent}%</span> */
    return (
        <div className="single-price-table d-flex align-items-center justify-content-between">
            <div className="p-content d-flex align-items-center">
                <img src={props.logoURL} alt="" />
                <p>{props.name} <span>{props.symbol}</span></p>
            </div>
            <div className={state.percent < 0 ? "price decrease" : "price increase"}>
                <p>
                    {problem && <span style={{ color: '#ff8800', fontWeight: 700 }}>!</span>}
                    ${typeof (state.lastPrice) === 'number' ? state.lastPrice.toFixed(2) : state.lastPrice}
                </p>
            </div>
        </div>
    )
}

export default Symbol