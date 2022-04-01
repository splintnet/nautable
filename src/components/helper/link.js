import Link from 'next/link';
import { withRouter } from 'next/router';
import React, { Children } from 'react';

export default withRouter(({
  router, children, as, href, ...rest
}) => (
  <Link
    {...rest}
    href={href}
    as={as}
  >
    {React.cloneElement(Children.only(children), {
      className: ((router.asPath === href && router.locale === rest.locale) || (router.asPath === as && router.locale === rest.locale)) ? `${children.props.className || ''} ${rest.activeClassName || 'active'}` : (children.props.className || ''),
    })}
  </Link>
));
