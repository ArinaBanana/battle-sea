import React from 'react';
import ReactDom from 'react-dom';
import { Game } from './component/game/game';
import { boats } from './mock/generateBoats';

ReactDom.render(
    <Game initialBoats={boats} />,
    document.getElementById('root'),
);
