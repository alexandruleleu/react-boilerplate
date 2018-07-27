// import React from 'react';
// import {Table} from 'semantic-ui-react';
// import _ from 'lodash';

// class GenericTableHeader extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             tableHeaderConfig: [
//                 {
//                     displayValue: 'Bonnummer',
//                     columnName: 'bonnummer',
//                 },
//                 {
//                     displayValue: 'Relatie',
//                     columnName: 'melderNaam',
//                 },
//                 {
//                     displayValue: 'Object',
//                     columnName: 'verhuurbaarObject.trefnaam',
//                 },
//                 {
//                     displayValue: 'Adres',
//                     columnName: 'objectAdres',
//                 },
//                 {
//                     displayValue: 'Melddatum',
//                     columnName: 'opdrachtDatum',
//                 },
//                 {
//                     displayValue: 'Uiterlijk gereed',
//                     columnName: 'geplandDatum',
//                 },
//                 {
//                     displayValue: 'Urgentie',
//                     columnName: 'urgentie',
//                 },
//             ],
//             column: null,
//             data: [
//                 { bonnummer: 'John', melderNaam: 'dsada', verhuurbaarObject: 'Male', objectAdres: 'dssad', opdrachtDatum: 'fdsf',  geplandDatum: 'fdsff', urgentie: 'fdsfdsd'},
//                 { bonnummer: 'John', melderNaam: 'dsad', verhuurbaarObject: 'Male', objectAdres: 'dssad', opdrachtDatum: 'fdsf',  geplandDatum: 'fdsff', urgentie: 'fdsfdsd'},
//                 { bonnummer: 'John', melderNaam: 'dsacxz', verhuurbaarObject: 'Male', objectAdres: 'dssad', opdrachtDatum: 'fdsf',  geplandDatum: 'fdsff', urgentie: 'fdsfdsd'},
//                 { bonnummer: 'John', melderNaam: 'dsafdas', verhuurbaarObject: 'Male', objectAdres: 'dssad', opdrachtDatum: 'fdsf',  geplandDatum: 'fdsff', urgentie: 'fdsfdsd'},
//                 { bonnummer: 'John', melderNaam: 'dsaacxz', verhuurbaarObject: 'Male', objectAdres: 'dssad', opdrachtDatum: 'fdsf',  geplandDatum: 'fdsff', urgentie: 'fdsfdsd'},
//                 { bonnummer: 'John', melderNaam: 'dcxzccz', verhuurbaarObject: 'Male', objectAdres: 'dssad', opdrachtDatum: 'fdsf',  geplandDatum: 'fdsff', urgentie: 'fdsfdsd'},
//             ],
//             direction: null,
//         };

//         this.renderTableHeaders = this.renderTableHeaders.bind(this);
//         this.handleSort = this.handleSort.bind(this);
//     }


//     handleSort(clickedColumn) {
//         console.log(clickedColumn);
//         // if (this.state.column !== clickedColumn) {
//         //     this.setState({
//         //     column: clickedColumn,
//         //     data: _.sortBy(this.state.data, [clickedColumn]),
//         //     direction: 'ascending',
//         //     })

//         //     return;
//         // }
        
//         // this.setState({
//         //     data: this.state.data.reverse(),
//         //     direction: this.direction === 'ascending' ? 'descending' : 'ascending',
//         // })
//     }

//     renderTableHeaders() {
//         return (
//             <div>
//                 <Table sortable celled fixed>
//                     <Table.Header>
//                         <Table.Row>
//                             <Table.HeaderCell
//                             name='bonnummer'
//                             sorted={this.state.column === 'bonnummer' ? this.state.direction : null}
//                             onClick={this.handleSort('bonnummer')}
//                             >
//                             Name
//                             </Table.HeaderCell>
//                             <Table.HeaderCell
//                             sorted={this.state.column === 'melderNaam' ? this.state.direction : null}
//                             onClick={this.handleSort('melderNaam')}
//                             >
//                             Age
//                             </Table.HeaderCell>
//                             <Table.HeaderCell
//                             sorted={this.state.column === 'verhuurbaarObject' ? this.state.direction : null}
//                             onClick={this.handleSort('verhuurbaarObject')}
//                             >
//                             Gender
//                             </Table.HeaderCell>
//                             <Table.HeaderCell
//                             sorted={this.state.column === 'opdrachtDatum' ? this.state.direction : null}
//                             onClick={this.handleSort('opdrachtDatum')}
//                             >
//                             Gender
//                             </Table.HeaderCell>
//                             <Table.HeaderCell
//                             sorted={this.state.column === 'geplandDatum' ? this.state.direction : null}
//                             onClick={this.handleSort('geplandDatum')}
//                             >
//                             Gender
//                             </Table.HeaderCell>
//                             <Table.HeaderCell
//                             sorted={this.state.column === 'urgentie' ? this.state.direction : null}
//                             onClick={this.handleSort('urgentie')}
//                             >
//                             Gender
//                             </Table.HeaderCell>
//                         </Table.Row>
//                     </Table.Header>
//                 </Table>
//           </div>
//         );
//     }

//     render() {
//         return (
//             <div className="row row--header">
//                 {this.renderTableHeaders()}
//             </div>
//         );
//     }
// }

// export default GenericTableHeader;

import _   from 'lodash'
import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'

const tableData = [
    { bonnummer: 'John1', melderNaam: 'dsada1', verhuurbaarObject: 'Male1', objectAdres: 'dssad', opdrachtDatum: 'fdsf',  geplandDatum: 'fdsff', urgentie: 'fdsfdsd'},
    { bonnummer: 'John2', melderNaam: 'dsad3', verhuurbaarObject: 'Male2', objectAdres: 'dssad', opdrachtDatum: 'fdsf',  geplandDatum: 'fdsff', urgentie: 'fdsfdsd'},
    { bonnummer: 'John3', melderNaam: 'dsacxz2', verhuurbaarObject: 'Male3', objectAdres: 'dssad', opdrachtDatum: 'fdsf',  geplandDatum: 'fdsff', urgentie: 'fdsfdsd'},
    { bonnummer: 'John4', melderNaam: 'dsafdas4', verhuurbaarObject: 'Male4', objectAdres: 'dssad', opdrachtDatum: 'fdsf',  geplandDatum: 'fdsff', urgentie: 'fdsfdsd'},
    { bonnummer: 'John5', melderNaam: 'dsaacxz5', verhuurbaarObject: 'Male5', objectAdres: 'dssad', opdrachtDatum: 'fdsf',  geplandDatum: 'fdsff', urgentie: 'fdsfdsd'},
    { bonnummer: 'John6', melderNaam: 'dcxzccz6', verhuurbaarObject: 'Male6', objectAdres: 'dssad', opdrachtDatum: 'fdsf',  geplandDatum: 'fdsff', urgentie: 'fdsfdsd'},
]

export default class TableExampleSortable extends React.Component {
  state = {
    column: null,
    data: tableData,
    direction: null,
  }

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending',
      })

      return
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }

  render() {
    const { column, data, direction } = this.state

    return (
      <Table sortable celled fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={column === 'bonnummer' ? direction : null}
              onClick={this.handleSort('bonnummer')}
            >
              Bonnummer
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'melderNaam' ? direction : null}
              onClick={this.handleSort('melderNaam')}
            >
              Relatie
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'verhuurbaarObject' ? direction : null}
              onClick={this.handleSort('verhuurbaarObject')}
            >
              Object
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'objectAdres' ? direction : null}
              onClick={this.handleSort('objectAdres')}
            >
              1
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'opdrachtDatum' ? direction : null}
              onClick={this.handleSort('opdrachtDatum')}
            >
              2
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'geplandDatum' ? direction : null}
              onClick={this.handleSort('geplandDatum')}
            >
              3
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'urgentie' ? direction : null}
              onClick={this.handleSort('urgentie')}
            >
              4
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(data, ({ bonnummer, melderNaam, verhuurbaarObject, objectAdres, opdrachtDatum, geplandDatum, urgentie}) => (
            <Table.Row key={bonnummer}>
              <Table.Cell>{bonnummer}</Table.Cell>
              <Table.Cell>{melderNaam}</Table.Cell>
              <Table.Cell>{verhuurbaarObject}</Table.Cell>
              <Table.Cell>{objectAdres}</Table.Cell>
              <Table.Cell>{opdrachtDatum}</Table.Cell>
              <Table.Cell>{geplandDatum}</Table.Cell>
              <Table.Cell>{urgentie}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    )
  }
}

