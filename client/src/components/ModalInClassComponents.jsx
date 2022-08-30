// import React, { Component } from 'react'
// import { Modal } from 'react-responsive-modal';

// class ModalInClassComponents extends Component {

//   // No constructor or props defined to begin with. I'll add them
//   constructor(props) {
//     super(props);
//     this.state = {
//       openModal: false
//     }
//   }

//   onClickButton = event => {
//     event.preventDefault()
//     this.setState({ openModal: true })
//   }

//   onCloseModal = () => {
//     this.setState({ openModal: false })
//   }

//   render() {
//     // access to this.props.character
//     return (
//       <div className="character-modal">

//         {!this.state.openModal ? <button onClick={this.onClickButton}> View </button> : <div></div>}

//         {this.state.openModal ?
//           <Modal open={this.state.openModal} onClose={this.onCloseModal}>

//             <h1 onClick={() => this.onCloseModal}>{this.props.character.name}</h1>
//             <div>{`Level ${this.props.character.level}`}</div>
//             <div>{this.props.character.ancestry}</div>
//             <div>{this.props.character.class}</div>


//           </Modal> : ''
//         }
//       </div>
//     )
//   }
// }

// export default ModalInClassComponents;
