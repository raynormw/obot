import React from 'react';
import { connect } from 'react-redux';
import {
  Form,
  Radio,
  InputNumber,
  Button,
  Select,
  Row,
  Col,
  Alert
} from 'antd';

import {
  buyingBase,
  sellingBase,
} from '../actions/baseAction.js';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
const styles = {
  dropdownContainer: {
    width : '15em',
    paddingLeft: '2.5em'
  },
  inputNumberContainer: {
    width : '13em'
  },
  modal: {
    marginTop: '1em'
  }
}

class FormBase extends React.Component {
  state = {
    modalbuy: false,
    modalsell: false
  }

  _closeBuyModal = () => {
    this.setState({
      modalbuy: false
    });
  }

  _closeSellModal = () => {
    this.setState({
      modalsell: false
    });
  }

  _handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        if(values.status === 'buy') {
          this.props.submitBuying(values.coin, values.price);
          this._handleReset();
          this.setState({
            modalbuy: true
          });
        } else if(values.status === 'sell') {
          this.props.submitSelling(values.coin, values.price);
          this._handleReset();
          this.setState({
            modalsell: true
          });
        }
      }
    });
  }

  _handleReset = () => {
    this.props.form.resetFields();
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };

    return (
      <Form onSubmit={this._handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="Market"
          hasFeedback
        >
          {getFieldDecorator('coin', {
            initialValue: 'bitcoin',
            rules: [{
              required: true, message: 'Please select your Coin!',
            }],
          })(
            <Select style={styles.dropdownContainer}>
              <Option value="bitcoin">Bitcoin/IDR</Option>
              <Option value="etherum">ETH/IDR</Option>
              <Option value="litecoin">LTC/IDR</Option>
              <Option value="waves">WAVES/IDR</Option>
              <Option value="ripple">XRP/IDR</Option>
              <Option value="zonk">XZC/IDR</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Amount"
        >
          {getFieldDecorator('price', {
            rules: [{ required: true, message: 'Please input your base amount!' }],
          })(

            <InputNumber style={styles.inputNumberContainer}
              min={1}
              formatter={value => `Rp. ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={value => value.replace(/Rp.\s?|(,*)/g, '')}
            />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Status"
        >
          {getFieldDecorator('status', {
            initialValue: 'buy',
            rules: [{ required: true, message: 'Please choice between buy or sell!' }],
          })(
            <RadioGroup>
              <Radio value='buy'>Buy</Radio>
              <Radio value='sell'>Sell</Radio>
            </RadioGroup>
          )}
        </FormItem>

        <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
          <Row type="flex" justify="space-between">
            <Col span={8}>
              <Button type="danger" onClick={this._handleReset}>Reset</Button>
            </Col>
            <Col span={8}>
              <Button type="primary" htmlType="submit">Submit</Button>
            </Col>
          </Row>
        </FormItem>
        {this.state.modalbuy &&
          <Alert message="Base for buy success!" type="success" closable onClose={this._closeBuyModal} style={styles.modal}/>
        }
        {this.state.modalsell &&
          <Alert message="Base for sell success!" type="error" closable onClose={this._closeSellModal} style={styles.modal}/>
        }
      </Form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitBuying: (coin, amount) => dispatch(buyingBase(coin, amount)),
    submitSelling: (coin, amount) => dispatch(sellingBase(coin, amount))
  }
}

const WrappedFormBase = Form.create()(FormBase);
export default connect(null, mapDispatchToProps)(WrappedFormBase);
