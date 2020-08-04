function output(obj) {
  console.log(JSON.stringify({ items: obj }, null, 2));
}

async function main(argv) {
  const result = [
    {
      type: 'file',
      title: 'Title',
      subtitle: 'Subtitle',
      arg: 'Argument',
    },
  ];

  output(result);
}

main(process.argv.slice(2));
