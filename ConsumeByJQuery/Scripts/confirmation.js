function ConfirmAction(actionID, entityID) {
    var msgConfirm = '', submitForm = false;
    document.getElementById('hdnActionID').value = actionID;
    document.getElementById('hdnEntityID').value = entityID;
    switch (actionID) {
        case 1:
            msgConfirm = 'Are you sure you want to delete?';
            break;
        case 2:
            msgConfirm = 'Are you sure you want to delete?';
            break;
        case 3:
            msgConfirm = 'Are you sure you want to delete?';
            break;                 
    }
    if (submitForm) {
        __doPostBack('diagConfirm', '1');
    }
    else {
        document.getElementById('spanConfirmMsg').innerHTML = msgConfirm;
        ShowHide('diagConfirm_DvMsg', '1');
        AlignObjectToScrollPosition('diagConfirm_DvMsg');
    }
    return false;
}

function ShowHide(divId, isShow) {
    document.getElementById(divId).style.display = isShow == '0' ? 'none' : '';
}

function AlignObjectToScrollPosition(divId) {
    var scrollPosX = GetScrollX(), scrollPosY = GetScrollY();
    document.getElementById(divId).style.left = scrollPosX + 'px';
    document.getElementById(divId).style.top = scrollPosY + 'px';
}

function GetScrollY() {
    var __nonMSDOMBrowser = (window.navigator.appName.toLowerCase().indexOf('explorer') == -1);
    if (__nonMSDOMBrowser) {
        return window.pageYOffset;
    }
    else {
        if (document.documentElement && document.documentElement.scrollTop) {
            return document.documentElement.scrollTop;
        }
        else if (document.body) {
            return document.body.scrollTop;
        }
    }
    return 0;
}

function GetScrollX() {
    var __nonMSDOMBrowser = (window.navigator.appName.toLowerCase().indexOf('explorer') == -1);
    if (__nonMSDOMBrowser) {
        return window.pageXOffset;
    }
    else {
        if (document.documentElement && document.documentElement.scrollTop) {
            return document.documentElement.scrollLeft;
        }
        else if (document.body) {
            return document.body.scrollLeft;
        }
    }
    return 0;
}