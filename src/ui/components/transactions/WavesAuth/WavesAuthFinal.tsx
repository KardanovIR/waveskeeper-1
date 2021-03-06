import * as React from 'react'
import { translate, Trans } from 'react-i18next';
import { I18N_NAME_SPACE } from '../../../appConfig';

@translate(I18N_NAME_SPACE)
export class WavesAuthFinal extends React.PureComponent {
    
    readonly props;
    
    render() {
        const { isApprove, isReject } = this.props;
        
        if (isApprove) {
            return <div>
                <div className="margin-main headline2">
                    <Trans i18nKey='sign.wavesAthConfirmed'>Sign a waves auth request!</Trans>
                </div>
            </div>
        }
        
        if (isReject) {
            return <div className="margin-main-large headline2">
                <Trans i18nKey='sign.authRejected'>Request has not been signed</Trans>
            </div>
        }
        
        return null;
    }
}
