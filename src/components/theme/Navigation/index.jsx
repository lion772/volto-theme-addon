import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { flattenToAppURL, getBaseUrl } from '@plone/volto/helpers';
import { List } from 'semantic-ui-react';
import { getNavigation } from '@plone/volto/actions';
import config from '@plone/volto/registry';
import wikiSVG from '../../../../../../icons/wiki.svg';
import dashboardSVG from '../../../../../../icons/dashboard.svg';
import neuigkeitenSVG from '../../../../../../icons/neuigkeiten.svg';
import medienmanagerSVG from '../../../../../../icons/medienmanager.svg';
import nutzerSVG from '../../../../../../icons/nutzer.svg';
import folder from '@plone/volto/icons/folder.svg';
import { Icon } from '@plone/volto/components';

const Navigation = (props) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.navigation?.items ?? []);
  const category = useSelector(
    (state) => state.router?.location?.query?.category,
  );

  const token = useSelector((state) => state.userSession?.token);
  const content = useSelector((state) => state.content);

  React.useEffect(() => {
    dispatch(getNavigation(getBaseUrl(''), config.settings.navDepth));
  }, [dispatch, token, content]);

  const isInPath = (url) => {
    if (category) {
      if (category === 'Wiki' && url === '/search?category=Wiki') {
        return true;
      } else if (category === 'Medien' && url === '/search?category=Medien') {
        return true;
      }
      return false;
    }

    if (url && props.pathname) {
      if (props.pathname.split('/')[1] === url.split('/')[1]) {
        return true;
      }
    } else if (props.pathname === '/') {
      return true;
    }
    return false;
  };

  const getIcon = (url) => {
    const iconsByMainPath = {
      neuigkeiten: neuigkeitenSVG,
      nutzer: nutzerSVG,
    };
    const mainPath = url.split('/')[1];

    let icon = folder;
    let iconName = 'folder';
    if (iconsByMainPath[mainPath]) {
      icon = iconsByMainPath[mainPath];
      iconName = mainPath;
    } else if (mainPath === 'search?category=Wiki') {
      icon = wikiSVG;
      iconName = 'wiki';
    } else if (mainPath === 'search?category=Medien') {
      icon = medienmanagerSVG;
      iconName = 'media';
    } else if (!url) {
      icon = dashboardSVG;
      iconName = 'dashboard';
    }

    return <Icon name={icon} className={`icon-${iconName}`} size="1.25em" />;
  };

  const getFormattedItems = () => {
    let formattedItems = [];

    items.forEach((item) => {
      if (item.url === '/wiki') {
        item.url = '/search?category=Wiki';
      }
      if (item.url === '/medien') {
        item.url = '/search?category=Medien';
      }

      formattedItems.push(item);
    });

    return formattedItems;
  };

  return (
    <List>
      {getFormattedItems()?.map(function (item, i) {
        return (
          <List.Item
            key={i}
            className={isInPath(item['url']) ? 'in-path' : undefined}
          >
            <List.Content>
              <Link to={flattenToAppURL(item['url'])}>
                {getIcon(item['url'])}
                {!item['url'] ? 'Startseite' : item['title']}
              </Link>
            </List.Content>
          </List.Item>
        );
      })}
      <List.Item
        key={99}
        className={isInPath('/nutzer') ? 'in-path' : undefined}
      >
        <List.Content>
          <Link to={flattenToAppURL('/nutzer')}>
            {getIcon('/nutzer')}
            {'Nutzer'}
          </Link>
        </List.Content>
      </List.Item>
    </List>
  );
};

export default Navigation;
