class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Ola {this.props.name}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById('hello-example')
);