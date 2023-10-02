import React from 'react';
import ReactDOM from 'react-dom/client';
var element = <h1> Hello world, Welcome to React Den !!!
    <table>
        <tr>
            <th>Name</th>
        </tr>
        <tr>
            <th>Akhil</th>
        </tr>
        <tr>
            <th>Tiwari</th>
        </tr>
    </table>
</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
