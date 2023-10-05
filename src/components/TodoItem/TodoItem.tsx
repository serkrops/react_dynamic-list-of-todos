import classNames from 'classnames';
import { Todo } from '../../types/Todo';

type Props = {
  todo: Todo,
  selectedTodoId?: number,
  onSelectedTodo: (todo: Todo) => void,
};

export const TodoItem: React.FC<Props> = ({
  todo,
  selectedTodoId,
  onSelectedTodo,
}) => {
  const isTodoSelected = todo.id === selectedTodoId;

  return (
    <tr
      key={todo.id}
      data-cy="todo"
      className={classNames({
        'has-background-info-light': isTodoSelected,
      })}
    >
      <td className="is-vcentered">{todo.id}</td>
      <td className="is-vcentered">
        {todo.completed && (
          <span className="icon" data-cy="iconCompleted">
            <i className="fas fa-check" />
          </span>
        )}
      </td>
      <td className="is-vcentered is-expanded">
        <p className={classNames({
          'has-text-danger': !todo.completed,
          'has-text-success': todo.completed,
        })}
        >
          {todo.title}
        </p>
      </td>
      <td className="has-text-right is-vcentered">
        <button
          data-cy="selectButton"
          className="button"
          type="button"
          onClick={() => {
            onSelectedTodo(todo);
          }}
        >
          <span className="icon">
            <i className={classNames('far', {
              'fa-eye': !isTodoSelected,
              'fa-eye-slash': isTodoSelected,
            })}
            />
          </span>
        </button>
      </td>
    </tr>
  );
};
