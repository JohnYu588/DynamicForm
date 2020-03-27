/**
 * title: 基础 选择框
 * desc: 表单使用 demo
 */
import React, { FC } from 'react';
import { Button, WhiteSpace, Picker, List } from 'antd-mobile';
import { Field, useForm } from 'rc-field-form';
import { Store, ValidateErrorEntity } from 'rc-field-form/es/interface';
// 所有需要从 rc-field-form 中导出的字段都可以在 dform 中导出
import DynamicForm, { IFormItemProps } from '../../../DynamicForm';

const tailLayout = {
  wrapperCol: { offset: 2, span: 20 },
};

const seasons = [
  [
    {
      label: '2013',
      value: '2013',
    },
    {
      label: '2014',
      value: '2014',
    },
  ],
  [
    {
      label: '春',
      value: '春',
    },
    {
      label: '夏',
      value: '夏',
    },
  ],
];

const citys = [
  [
    {
      label: '福州',
      value: '福州',
    },
    {
      label: '厦门',
      value: '厦门',
    },
  ],
];
const areaList = [
  {
    "label": "营销资源及政策类",
    "children": [
      {
        "parent_value": "1",
        "label": "营销资源申请",
        "children": [
          {
            "parent_value": "11",
            "label": "资源申请",
            "value": "111"
          }
        ],
        "value": "11"
      },
      {
        "parent_value": "1",
        "label": "营销政策申请",
        "children": [
          {
            "parent_value": "12",
            "label": "政策申请",
            "value": "121"
          }
        ],
        "value": "12"
      }
    ],
    "value": "1"
  },
  {
    "label": "设备及系统支撑类",
    "children": [
      {
        "parent_value": "2",
        "label": "业务受理支撑设备",
        "children": [
          {
            "parent_value": "21",
            "label": "蓝牙盒子",
            "value": "211"
          },
          {
            "parent_value": "21",
            "label": "其他设备",
            "value": "212"
          }
        ],
        "value": "21"
      },
      {
        "parent_value": "2",
        "label": "业务受理支撑系统",
        "children": [
          {
            "parent_value": "22",
            "label": "BOSS系统",
            "value": "221"
          },
          {
            "parent_value": "22",
            "label": "智汇随身厅",
            "value": "222"
          },
          {
            "parent_value": "22",
            "label": "智能CRM",
            "value": "223"
          },
          {
            "parent_value": "22",
            "label": "其他",
            "value": "224"
          }
        ],
        "value": "22"
      },
      {
        "parent_value": "2",
        "label": "运营管理支撑系统",
        "children": [
          {
            "parent_value": "23",
            "label": "经分系统",
            "value": "231"
          },
          {
            "parent_value": "23",
            "label": "智慧网格运营平台",
            "value": "232"
          },
          {
            "parent_value": "23",
            "label": "信息摸排工具",
            "value": "233"
          },
          {
            "parent_value": "23",
            "label": "渠道集中运营管理平台",
            "value": "234"
          },
          {
            "parent_value": "23",
            "label": "倒三角支撑平台",
            "value": "235"
          },
          {
            "parent_value": "23",
            "label": "其他系统",
            "value": "236"
          }
        ],
        "value": "23"
      }
    ],
    "value": "2"
  },
  {
    "label": "渠道建设与优化类",
    "children": [
      {
        "parent_value": "3",
        "label": "传统渠道建设",
        "children": [
          {
            "parent_value": "31",
            "label": "传统渠道建设",
            "value": "311"
          }
        ],
        "value": "31"
      },
      {
        "parent_value": "3",
        "label": "传统渠道布局优化",
        "children": [
          {
            "parent_value": "32",
            "label": "传统渠道布局优化",
            "value": "321"
          }
        ],
        "value": "32"
      },
      {
        "parent_value": "3",
        "label": "泛渠道建设与拓展",
        "children": [
          {
            "parent_value": "33",
            "label": "泛渠道建设与拓展",
            "value": "331"
          }
        ],
        "value": "33"
      }
    ],
    "value": "3"
  },
  {
    "label": "网络支撑类",
    "children": [
      {
        "parent_value": "4",
        "label": "弱覆盖区域优化",
        "children": [
          {
            "parent_value": "41",
            "label": "弱覆盖区域优化",
            "value": "411"
          }
        ],
        "value": "41"
      },
      {
        "parent_value": "4",
        "label": "网络盲区覆盖建设",
        "children": [
          {
            "parent_value": "42",
            "label": "网络盲区覆盖建设",
            "value": "421"
          }
        ],
        "value": "42"
      }
    ],
    "value": "4"
  },
  {
    "label": "家庭宽带类",
    "children": [
      {
        "parent_value": "5",
        "label": "小区宽带网络接入",
        "children": [
          {
            "parent_value": "51",
            "label": "小区宽带网络接入",
            "value": "511"
          }
        ],
        "value": "51"
      },
      {
        "parent_value": "5",
        "label": "小区宽带线路改造",
        "children": [
          {
            "parent_value": "52",
            "label": "小区宽带线路改造",
            "value": "521"
          }
        ],
        "value": "52"
      },
      {
        "parent_value": "5",
        "label": "小区宽带端口扩容",
        "children": [
          {
            "parent_value": "53",
            "label": "小区宽带端口扩容",
            "value": "531"
          }
        ],
        "value": "53"
      },
      {
        "parent_value": "5",
        "label": "宽带入户装维",
        "children": [
          {
            "parent_value": "54",
            "label": "宽带入户装维",
            "value": "541"
          }
        ],
        "value": "54"
      },
      {
        "parent_value": "5",
        "label": "装维人员临时调用",
        "children": [
          {
            "parent_value": "55",
            "label": "装维人员临时调用",
            "value": "551"
          }
        ],
        "value": "55"
      }
    ],
    "value": "5"
  },
  {
    "label": "小微集团类",
    "children": [
      {
        "parent_value": "6",
        "label": "小微集团宽带",
        "children": [
          {
            "parent_value": "61",
            "label": "小微集团宽带",
            "value": "611"
          }
        ],
        "value": "61"
      },
      {
        "parent_value": "6",
        "label": "小微集团信息化",
        "children": [
          {
            "parent_value": "62",
            "label": "小微集团信息化",
            "value": "621"
          }
        ],
        "value": "62"
      },
      {
        "parent_value": "6",
        "label": "其他",
        "children": [
          {
            "parent_value": "63",
            "label": "其他",
            "value": "631"
          }
        ],
        "value": "63"
      }
    ],
    "value": "6"
  },
  {
    "label": "业务受理及流程类",
    "children": [
      {
        "parent_value": "7",
        "label": "家宽业务甩单",
        "children": [
          {
            "parent_value": "71",
            "label": "家宽业务甩单",
            "value": "711"
          }
        ],
        "value": "71"
      },
      {
        "parent_value": "7",
        "label": "集团业务甩单",
        "children": [
          {
            "parent_value": "72",
            "label": "集团业务甩单",
            "value": "721"
          }
        ],
        "value": "72"
      },
      {
        "parent_value": "7",
        "label": "业务受理流程优化",
        "children": [
          {
            "parent_value": "73",
            "label": "业务受理流程优化",
            "value": "731"
          }
        ],
        "value": "73"
      }
    ],
    "value": "7"
  },
  {
    "label": "数据支撑类",
    "children": [
      {
        "parent_value": "8",
        "label": "营销数据提取与固化",
        "children": [
          {
            "parent_value": "81",
            "label": "营销数据提取与固化",
            "value": "811"
          }
        ],
        "value": "81"
      },
      {
        "parent_value": "8",
        "label": "其他数据提取与固化",
        "children": [
          {
            "parent_value": "82",
            "label": "其他数据提取与固化",
            "value": "821"
          }
        ],
        "value": "82"
      }
    ],
    "value": "8"
  },
  {
    "label": "其他支撑类",
    "children": [
      {
        "parent_value": "9",
        "label": "培训",
        "children": [
          {
            "parent_value": "91",
            "label": "培训",
            "value": "911"
          }
        ],
        "value": "91"
      },
      {
        "parent_value": "9",
        "label": "商机信息",
        "children": [
          {
            "parent_value": "92",
            "label": "商机信息",
            "value": "921"
          }
        ],
        "value": "92"
      },
      {
        "parent_value": "9",
        "label": "竞争信息",
        "children": [
          {
            "parent_value": "93",
            "label": "竞争信息",
            "value": "931"
          }
        ],
        "value": "93"
      },
      {
        "parent_value": "9",
        "label": "其他",
        "children": [
          {
            "parent_value": "94",
            "label": "其他",
            "value": "941"
          }
        ],
        "value": "94"
      }
    ],
    "value": "9"
  }
];
interface PageProps { }

const Page: FC<PageProps> = () => {
  const [form] = useForm();
  const onFinish = (values: Store) => {
    // eslint-disable-next-line no-console
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo: ValidateErrorEntity) => {
    // eslint-disable-next-line no-console
    console.log(errorInfo);
  };
  const formsData = [
    {
      type: 'select',
      fieldProps: 'userPicker1',
      title: '季节',
      placeholder: '请选择',
      data: seasons,
    },
    {
      type: 'select',
      fieldProps: 'userPicker2',
      required: true,
      title: '城市',
      placeholder: '请选择',
      data: citys,
    },
    {
      type: 'select',
      fieldProps: 'userPicker3',
      required: true,
      title: '城市(不可编辑)',
      placeholder: '请选择',
      data: citys,
      disabled: true,
    },
    {
      type: 'select',
      fieldProps: 'verticalPicker',
      title: '季节',
      placeholder: '请选择',
      data: seasons,
      positionType: 'vertical',
    },
    {
      type: 'select',
      placeholder: "请选择(可选)",
      data: areaList,
      title: "问题分类",
      cascade: true
    },
  ] as IFormItemProps[];

  const formsValues = {
    userPicker2: ['厦门'],
    userPicker3: ['福州'],
  };

  const formProps = {
    form,
    onFinish,
    onFinishFailed,
    formsValues,
    data: formsData,
    isDev: true,
  };

  return (
    <DynamicForm {...formProps}>
      {/* <Picker
        extra="请选择(可选)"
        data={areaList}
        title="问题分类"
      >
        <List.Item arrow="horizontal">问题分类</List.Item>
      </Picker> */}
      <WhiteSpace size="sm" />
      <Field {...tailLayout}>
        <Button type="primary" onClick={() => form.submit()}>
          Submit
        </Button>
      </Field>
    </DynamicForm>
  );
};

export default Page;
