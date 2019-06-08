(function (_w) {
  const NewContext = function() {
    return {
      name: 'Context',
      version: '1.1.0',
    };
  };

  const CompileNewContext = ({name, version}) => {
    return {name, version, coca: 'pepsi'};
  };

  _w.NewContext = NewContext;
  _w.CompileNewContext = CompileNewContext;
})(window);
