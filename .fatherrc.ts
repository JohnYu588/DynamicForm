import px2rem from 'postcss-plugin-px2rem';
export default {
  esm: {
    type: 'babel',
  },
  cjs: {
    type: 'babel',
  },
  umd: {
    name: 'DynamicForm',
    globals: {
      react: 'React',
    },
  },
  disableTypeCheck: true,
  cssModules: false,
  // lessInBabelMode: true,
  namedExports: {
    'react-is': ['isFragment'],
    'react-dom': ['createPortal', 'findDOMNode'],
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      { libraryName: 'antd-mobile', libraryDirectory: 'es', style: true },
      'antd-mobile',
    ],
  ],
  extraPostCSSPlugins: [
    px2rem({
      rootValue: 100,
      minPixelValue: 2,
    }),
  ],
};
