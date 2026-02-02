const yargs = require('yargs')
const {createTask,display,displayByID,updateTaskStatus,deleteTask,connectDB }= require('./index')

yargs(process.argv.slice(2))
  .middleware(async () => {
    await connectDB();
  })
//   .command(
//   '$0',
//   'default',
//   () => {},
//   async () => {
//     await connectDB();
//     console.log('Connected, now do CRUD');
//   }
// )
  .command(
    'add <title>',
    'Add a new task',
    () => {},
    async (argv) => await createTask(argv.title)
  )
  .command(
    'displayall',
    'Shows all tasks',
    ()=>{},
    async() => await display()
  )
  .command(
    'update <id>',
    'Update a task',
    (yargs) => {
      yargs
        .option('status', { type: 'boolean' });
    },
    async (argv) => await updateTaskStatus(argv.id, argv.status)
  )
  .command(
    'delete <id>',
    'Delete a task',
    () => {},
    async (argv) => await deleteTask(argv.id)
  )
  .command(
    'display <id>',
    'Shows all tasks',
    ()=>{},
     async(argv) => await displayByID(argv.id)
  )
  .demandCommand(1)
  .help()
  .parse();