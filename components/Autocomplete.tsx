import styles from '../styles/Autocomplete.module.scss';
import { ComponentType } from 'react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Closeable from './Closeable';

export type OptionProps<T> = {
  value: T,
  display: string
};

export type NewProps = {
  display: string
};

export type ChosenProps<T> = {
  value: T
};

type Props<P> = {
  values: Array<P>,
  width: string // Pixels,
  placeholder: string,
  option: ComponentType<OptionProps<P>>,
  new: ComponentType<NewProps>,
  chosen: ComponentType<ChosenProps<P>>,
  retrieve: ((value: string) => Array<P>),
  create: ((value: string) => P),
  display: ((value: P) => string),
  onChoice: ((value: P | null) => void),
  onRemoval: ((value: P) => void)
};

type State<S> = {
  value: string,
  reveal: boolean,
  options: Array<S>
};

export default class Autocomplete<A, B> extends React.Component<Props<A | B>, State<A | B>> {
  constructor(props: Props<A | B>) {
    super(props);
    this.state = {
      value: "",
      reveal: false,
      options: props.retrieve(""),
    };
  }

  getUniqueOptions(value: string): Array<A | B> {
    const displays = this.props.values.map(this.props.display);
    return this.props.retrieve(value).filter((option) => !displays.includes(this.props.display(option)));
  }

  onFocus = (e: React.SyntheticEvent ) => {
    const options = this.getUniqueOptions(this.state.value);
    this.setState({options, reveal: true});
  }

  onBlur = (e: React.SyntheticEvent ) => {
    this.setState({reveal: false})
  }

  onChange = (e: React.SyntheticEvent ) => {
    const value = e.currentTarget.value;
    const options = this.getUniqueOptions(value);
    this.setState({options, value});
  }

  onChoice = (value: A | B) => { 
    this.props.onChoice(value);
    const options = this.getUniqueOptions("");
    this.setState({options, reveal: false, value: ""});
  }

  onRemoval = (value: A | B) => {
    this.props.onRemoval(value);
  }

  render() {
    return (
      <div className={styles.autoComplete}>
        {this.renderChoices()}
        <div className={styles.input}>
          <input
            className={styles.textInput}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onChange={this.onChange}
            value={this.state.value}
            type="text"
            placeholder={this.props.placeholder}
            style={{width: this.props.width}}
          />
          {this.renderOptions()}
        </div>
      </div>
    );
  }

  renderOptions() {
    const Option = this.props.option;
    if (this.state.reveal == false) {
      return null;
    }

    const options = this.state.options.map((option) => {
      const display = this.props.display(option);
      return (
        <div key={display} onMouseDown={() => this.onChoice(option)}>
          <Option value={option} display={display} />
        </div>
      );
    });

    return (
      <div className={styles.options} style={{width: this.props.width}}>
        {options}
        {this.renderNewOption()}
      </div>
    );
  }

  renderNewOption() {
    const New = this.props.new;
    const { value } = this.state;
    if (value == "" || this.props.values.map(this.props.display).includes(value)) {
      return null;
    }
    return (
      <div onMouseDown={() => this.onChoice(this.props.create(value))}>
        <New
          key={this.props.display(value)}
          display={value}
        />
      </div>
    );
  }

  renderChoices() {
    const Chosen = this.props.chosen;
    return this.props.values.map((value, i) => {
      return (
        <div className={styles.chosenItem} key={i}>
          <Closeable onClose={() => this.onRemoval(value)}>
            <Chosen value={value} />
          </Closeable>
        </div>
      );
    });
  }
}
