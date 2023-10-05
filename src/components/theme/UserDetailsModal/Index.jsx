import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '@plone/volto/actions';
import { Button, Label, Modal } from 'semantic-ui-react';
import { useEffect } from 'react';
import { getColor } from '@plone/volto/helpers';
import Avatar from '../../../customizations/volto/components/theme/Avatar/Avatar';

const UserDetailsModal = () => {
  const dispatch = useDispatch();
  const userId = useSelector((store) => store?.userdetails?.userId || '');
  const user = useSelector((state) => state.users?.user || {});

  const closeModal = () => {};

  const hasUserId = () => {
    return !!userId;
  };

  const hasUserData = () => {
    return user.id && userId === user.id;
  };

  useEffect(() => {
    if (userId) {
      dispatch(getUser(userId));
    }
  }, [dispatch, userId]);

  if (!hasUserData()) {
    return (
      <Modal open={hasUserId()} className={'user-details-modal'} size={'tiny'}>
        <Modal.Actions>
          <Button
            basic
            circular
            secondary
            icon="remove"
            aria-label="Close"
            title="Close"
            floated="right"
            size="big"
            onClick={() => closeModal()}
          />
        </Modal.Actions>
        <Modal.Content>
          <table>
            <tbody>
              <tr>
                <td>
                  <Avatar
                    src={user.portrait}
                    title={user.fullname || user.id}
                    color={getColor(user.id)}
                  />
                </td>
                <td>
                  <div className={'ui placeholder line'}></div>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Titel</td>
                <td>
                  <div className={'ui placeholder line'}></div>
                </td>
              </tr>
              <tr>
                <td>Kürzel</td>
                <td>
                  <div className={'ui placeholder line'}></div>
                </td>
              </tr>
              <tr>
                <td>Rechte</td>
                <td>
                  <div className={'ui placeholder line'}></div>
                </td>
              </tr>
              <tr>
                <td>Standort</td>
                <td>
                  {' '}
                  <div className={'ui placeholder line'}></div>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  {' '}
                  <div className={'ui placeholder line'}></div>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th colSpan={2}>Erreichbarkeit</th>
              </tr>
              <tr>
                <td>Email</td>
                <td>
                  <div className={'ui placeholder line'}></div>
                </td>
              </tr>
              <tr>
                <td>Telefon</td>
                <td>
                  {' '}
                  <div className={'ui placeholder line'}></div>
                </td>
              </tr>
              <tr>
                <td>Mobil</td>
                <td>
                  {' '}
                  <div className={'ui placeholder line'}></div>
                </td>
              </tr>
              <tr>
                <td>Interne Durchwahl</td>
                <td>
                  {' '}
                  <div className={'ui placeholder line'}></div>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th colSpan={2}>Tätigkeiten</th>
              </tr>
              <tr>
                <td>Fachbereiche</td>
                <td>
                  <div className={'ui placeholder line'}></div>
                </td>
              </tr>
              <tr>
                <td>Zuständigkeiten</td>
                <td>
                  {' '}
                  <div className={'ui placeholder line'}></div>
                </td>
              </tr>
              <tr>
                <td>Funktionen/Rollen</td>
                <td className="text-value">
                  <div className={'ui placeholder line'}></div>
                </td>
              </tr>
              <tr>
                <td>Projektgruppen</td>
                <td className="text-value">
                  <div className={'ui placeholder line'}></div>
                </td>
              </tr>
            </tbody>
          </table>
        </Modal.Content>
      </Modal>
    );
  }
  return (
    <Modal open={hasUserId()} className={'user-details-modal'} size={'tiny'}>
      <Modal.Actions>
        <Button
          basic
          circular
          secondary
          icon="remove"
          aria-label="Close"
          title="Close"
          floated="right"
          size="big"
          onClick={() => closeModal()}
        />
      </Modal.Actions>
      <Modal.Content>
        {hasUserData() && (
          <table>
            <tbody>
              <tr>
                <td>
                  <Avatar
                    src={user.portrait}
                    title={user.fullname || user.id}
                    color={getColor(user.id)}
                  />
                </td>
                <td>
                  <h1>{user.fullname}</h1>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Titel</td>
                <td>{user.titel}</td>
              </tr>
              <tr>
                <td>Kürzel</td>
                <td>{user.kuerzel}</td>
              </tr>
              <tr>
                <td>Rechte</td>
                <td className="multiple-values">
                  {user.roles &&
                    user.roles.map((role) => (
                      <Label
                        key={role}
                        className="text-white user-right"
                        style={{ backgroundColor: '#40d4e3' }}
                      >
                        {role}
                      </Label>
                    ))}
                </td>
              </tr>
              <tr>
                <td>Standort</td>
                <td>{user.standort}</td>
              </tr>
              <tr>
                <td></td>
                <td>{user.buero}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th colSpan={2}>Erreichbarkeit</th>
              </tr>
              <tr>
                <td>Email</td>
                <td title={user.email}>{user.email}</td>
              </tr>
              <tr>
                <td>Telefon</td>
                <td>
                  <a href={'tel:' + user.telefon}>{user.telefon}</a>
                </td>
              </tr>
              <tr>
                <td>Mobil</td>
                <td>{user.mobile_telefonnummer}</td>
              </tr>
              <tr>
                <td>Interne Durchwahl</td>
                <td>{user.durchwahl}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th colSpan={2}>Tätigkeiten</th>
              </tr>
              <tr>
                <td>Fachbereiche</td>
                <td className="multiple-values">
                  {user.fachbereich &&
                    user.fachbereich.map((entry) => (
                      <div key={entry.id} className="subject-area">
                        {entry.title}
                      </div>
                    ))}
                </td>
              </tr>
              <tr>
                <td>Zuständigkeiten</td>
                <td className="multiple-values">
                  {user.zustaendigkeiten &&
                    user.zustaendigkeiten.map((zustaendigkeit) => (
                      <div key={zustaendigkeit} className="responsibility">
                        {zustaendigkeit}
                      </div>
                    ))}
                </td>
              </tr>
              <tr>
                <td>Funktionen/Rollen</td>
                <td className="text-value">
                  <div className="role">{user.funktion_rolle}</div>
                </td>
              </tr>
              <tr>
                <td>Projektgruppen</td>
                <td className="text-value">
                  <div className="project">{user.projektgruppe}</div>
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </Modal.Content>
    </Modal>
  );
};

export default UserDetailsModal;
