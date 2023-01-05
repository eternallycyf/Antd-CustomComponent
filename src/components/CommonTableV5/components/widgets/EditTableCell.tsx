import React, { PureComponent } from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Form, FormInstance } from 'antd';
import { getFieldComp } from '@/core/helpers';
import AccessBtn from '@/components/AccessBtn';
export const EditTableContext = React.createContext({});

class EditTableRow extends PureComponent<any, any> {
  state = {
    rowEditing: this.props.children[0].props.record.rowEditing ? true : false,
  };

  // 行状态
  setEditing = (editing: boolean) => {
    this.setState({ rowEditing: editing });
  };

  componentDidUpdate(
    prevProps: Readonly<any>,
    prevState: Readonly<any>,
    snapshot?: any,
  ): void {
    if (
      this.props.children[0].props.record.rowEditing !==
      prevProps.children[0].props.record.rowEditing
    ) {
      this.setState({
        rowEditing: this.props.children[0].props.record.rowEditing,
      });
    }
  }

  render() {
    const { form } = this.props;
    const { rowEditing } = this.state;
    return (
      <EditTableContext.Provider
        value={{ form, rowEditing, setEditing: this.setEditing }}
      >
        <tr {...this.props} />
      </EditTableContext.Provider>
    );
  }
}

export const EditTableFormRow = EditTableRow;

class RenderCell extends PureComponent<any, any> {
  state = {
    editing: this.props.rowEditing,
  };

  // 切换编辑状态
  toggleEdit = (editing: boolean) => {
    this.setState({ editing });
  };

  componentDidUpdate(
    prevProps: Readonly<any>,
    prevState: Readonly<any>,
    snapshot?: any,
  ): void {
    if (this.props.rowEditing !== prevProps.rowEditing) {
      this.setState({ editing: this.props.rowEditing });
    }
  }

  save = async (e: any) => {
    const { record, handleSave, setEditing, form } = this.props;
    await form.validateFields((error: any, values: any) => {
      if (!error) {
        this.toggleEdit(false);
        setEditing(false);
      }
      handleSave({ ...record, ...values });
    });
  };

  render(): React.ReactNode {
    const { editing } = this.state;
    const {
      index,
      title,
      dataIndex,
      children,
      type,
      record,
      controlProps,
      formFieldProps,
      form,
      rowEditing,
      setEditing,
      handleSave,
      editable,
      code,
      ...restProps
    } = this.props;

    const myControlProps = {
      allowClear: true,
      ...controlProps,
      onBlur: this.save,
      onPressEnter: this.save,
      size: (controlProps && controlProps.size) || 'small',
    };

    if (type && type == 'select') {
      myControlProps.labelInValue = true;
    }

    const fieldProps = {
      form,
      name: dataIndex,
      type,
      record,
      formFieldProps,
      controlProps: myControlProps,
      ...restProps
    };

    return editing ? (
      <Form.Item style={{ margin: 0 }} >
        {getFieldComp(fieldProps)}
      </Form.Item>
    ) : (
      <div className='editable-cell-value-wrap' style={{ paddingRight: 24 }}>
        {children}
        <AccessBtn>
          <EditOutlined
            data-code={code}
            className='editable-cell-icon'
            onClick={() => this.toggleEdit(true)}
          />
        </AccessBtn>
      </div>
    )
  }
}

export class EditableFormCell extends PureComponent<any, any>{
  static contextType = EditTableContext;

  render() {
    const {
      editable,
      dataIndex,
      title,
      record,
      index,
      handleSave,
      children,
      ...restProps
    } = this.props;
    return (
      <td>
        {editable ? <RenderCell {...this.props} {...EditTableContext} /> : children}
      </td>
    )
  }
}

export class EditTableCell extends PureComponent<any, any>{
  renderCell = (form: FormInstance) => {
    const {
      editing,
      index,
      title,
      dataIndex,
      children,
      type,
      record,
      controlProps,
      formFieldProps,
      ...restProps
    } = this.props;

    const myControlProps = {
      allowClear: true,
      ...controlProps,
      size: (controlProps && controlProps.size) || 'small',
    }

    if (type && type == 'select') {
      myControlProps.labelInValue = true;
    }

    const fieldProps = {
      form,
      name: dataIndex,
      type,
      record,
      formFieldProps,
      controlProps: myControlProps,
      ...restProps
    };

    return (
      <td {...restProps}>
        {
          editing ? (
            <Form.Item style={{ margin: 0 }}>
              {getFieldComp(fieldProps)}
            </Form.Item>
          ) : children
        }
      </td>
    )
  }


  render() {
    return (
      <EditTableContext.Consumer>
        {this.renderCell()}
      </EditTableContext.Consumer>
    )
  }
}