import React from 'react'
import "./styles.css";
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded'
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded'
import { Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
const List = ({coin}) => {
 // console.log(coin.price_change_percentage_24h)
  return (
    <Link to={`/coin/${coin.id}`}>
    <tr className="list-row">
      <Tooltip title="coin logo">
     <td className="td-image">
        <img src={coin.image} className="coin-logo"/>
        </td>
        </Tooltip>
        <Tooltip title="coin info">
        <td>
        <div className="name-col">
            <p className="coin-symbol list-symbol">{coin.symbol}</p>
            <p className="coin-name list-name">{coin.name}</p>
        </div>
      </td>
      </Tooltip>
      {coin && coin.
price_change_percentage_24h.toFixed(2)>0?(<Tooltip title="price change in 24h"><td className="chip-flex">
<div className="price-chip list-chip">{coin.
price_change_percentage_24h.toFixed(2)}%
</div>
<div className="icon-chip td-icon"><TrendingUpRoundedIcon/></div>
</td></Tooltip>):(<Tooltip title="price change in 24h"><td className="chip-flex">
        <div className="price-chip-red list-chip-red">{coin && coin.
price_change_percentage_24h.toFixed(2)}%
</div>
<div className="icon-chip-red td-icon"><TrendingDownRoundedIcon/></div>
      </td></Tooltip>)}
      <Tooltip title="current-price">
      <td className="info-container">
      <h3 className="coin-price td-center-align list-price" style={{color: coin && coin.
price_change_percentage_24h.toFixed(2)<0?"var(--red)":"var(--green)"}}>${coin && coin.current_price.toLocaleString()}</h3>
</td>
</Tooltip>
<Tooltip title="total volume">
<td>
<p className="total-volume td-right-align td-total-volume">{coin && coin.total_volume.toLocaleString()}</p>
</td>
</Tooltip>
<Tooltip title="market cap">
<td>
<p className="total-volume td-right-align list-cap">${coin && coin.market_cap.toLocaleString()}</p>
      </td>
      </Tooltip>
    </tr>
    </Link>
  )
}

export default List;
