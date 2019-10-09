/* eslint-disable max-lines */
/* eslint-disable max-lines-per-function */
import React from 'react'
import styled from 'styled-components'

import CodeBlock from './index'

import markdown from './README.md'

export default {
  title: 'Atoms/CodeBlock',
}

const Wrapper = styled.div`
  height: 600px;
  width: 800px;
`

export const codeBlock = () => (
  <Wrapper>
    <CodeBlock>
      {`
    <logheader platform="Linux" env-locale-cs="ANSI_X3.4-1968" process_id="avtar" version="7.5.101-101" tz="UTC" />

    --------------------------------------------------------------------------------------------------------
    -----  START avtar log 2019-10-03 09:49:29 UTC  [7.5.101-101 Linux-x86_64]
    --------------------------------------------------------------------------------------------------------
    
    2019-10-03 09:49:29 avtar Info <5008>: Logging to Pol3VgEBpPu_0-1570096131001-f73adf5e4b0dbe2f385c61c20fce38008cfbd58a-3016-vmimagew_avtar.log
    2019-10-03 09:49:29 avtar Info <5551>: Command Line: /usr/local/avamarclient/bin/avtar.bin --vardir=/usr/local/avamarclient/var --bindir=/usr/local/avamarclient/bin --sysdir=/usr/local/avamarclient/etc --logfile=Pol3VgEBpPu_0-1570096131001-f73adf5e4b0dbe2f385c61c20fce38008cfbd58a-3016-vmimagew_avtar.log --sysdir=/usr/local/avamarclient/etc --bindir=/usr/local/avamarclient/bin --vardir=/usr/local/avamarclient/var --ctlcallport=37505 --ctlinterface=3016-Pol3VgEBpPu_0-1570096131001-f73adf5e4b0dbe2f385c61c20fce38008cfbd58a --logtimeformat=default --logtimezone=default --cacheprefix=VmImage1 --tarstream-use-native-upaths=true --x22=32
    2019-10-03 09:49:29 avtar Info <7977>: Starting at 2019-10-03 09:49:29 UTC [avtar Dec 15 2017 08:50:40 7.5.101-101 Linux-x86_64]
    2019/10/03-09:49:29.42089 [avtar]  <1291> FIPS mode enabled
    2019-10-03 09:49:29 avtar Info <10684>: Setting ctl message version to 3 (from 1)
    2019-10-03 09:49:29 avtar Info <16136>: Setting ctl max message size to 268435456
    2019-10-03 09:49:29 avtar Info <6767>: Successfully connected to 127.0.0.1:37505
    2019-10-03 09:49:29 avtar Info <18839>: The flag --freezetimeout is no longer supported and will be ignored.
    2019-10-03 09:49:29 avtar Info <18839>: The flag --freezetimeout is no longer supported and will be ignored.
    2019-10-03 09:49:29 avtar Info <5900>: Workorder received:
    <snapup pid="vmimagew" time="1570096142" did="on-demand" ack="false" type="work" msgver="5" pidnum="3016" vcCid="d3588df2a6ed3081119c2f4233c6e3c30aa10cc5" targetCid="f73adf5e4b0dbe2f385c61c20fce38008cfbd58a" work="backup" ticket="XXX" key="3016-Pol3VgEBpPu_0-1570096131001-f73adf5e4b0dbe2f385c61c20fce38008cfbd58a" sync="bg" sessionid="4bbc978ec26272af36d7d757f6d3ce54a25c67ae" cid="ad29b905c583ed30c406e609c427a377813be7b0" gsansid="9157009613106509" last_ctl_man_key="3016-Pol3VgEBpPu_0-1570096131001-f73adf5e4b0dbe2f385c61c20fce38008cfbd58a" mid="29949/29961/33" targetUUID="503cf764-b95b-572a-be5a-4c86f7eab7af" wid="Pol3VgEBpPu_0-1570096131001#1" customaction="">
      <directives>
        <flag type="string" value="tls" name="encrypt" />
        <flag type="string" value="high" name="encrypt-strength" />
        <flag type="string" value="1570787331" name="expire" />
        <flag type="string" value="daily" name="retention-type" />
        <flag type="string" value="ave751-2907-allumette.vsphere.dev" name="hfsaddr" />
        <flag type="string" value="27000" name="hfsport" />
        <flag type="string" value="backuponly" name="id" />
        <flag type="password" value="****" name="ap" />
        <flag type="string" value="/root/110-b89b2dc45b5ea784574c69b6d7b6f9cc/VCenter_LU01-Q8-O8/vcsa.vsphere.dev/VirtualMachines/sdfgq/dolly-W2016_6p8kBodUOjugjHq2oBYqIA" name="path" />
      </directives>
      <catalog>
        <flag type="integer" pidnum="3016" value="15" name="MSSQL_post_action_timeout" />
        <flag type="checkbox" value="false" name="ddr" />
        <flag type="pulldown" pidnum="1001" value="high" name="ddr-encrypt-strength" />
        <flag type="pulldown" value="0" name="ddr-index" />
        <flag type="pulldown" pidnum="3016" value="8" name="ddr-vm-segmentation-mode" />
        <flag type="boolean" pidnum="3016" value="false" name="enable-metadata-index" />
        <flag type="checkbox" pidnum="3016" value="false" name="exclude_delete_file" />
        <flag type="checkbox" pidnum="3016" value="false" name="exclude_page_file" />
        <flag type="boolean" pidnum="3016" value="false" name="fail_on_quiesce_error" />
        <flag type="checkbox" pidnum="3016" value="true" name="guest_MSSQL_NT_auth" />
        <flag type="boolean" pidnum="3016" value="false" name="mark_VMTools_error" />
        <flag type="integer" pidnum="3016" value="15" name="quiesce_timeout" />
        <flag type="integer" pidnum="3016" value="5" name="run_after_script_max_in_min" />
        <flag type="integer" pidnum="3016" value="5" name="run_before_script_max_in_min" />
        <flag type="boolean" pidnum="3016" value="true" name="set_annotation_BackupStatus" />
        <flag type="integer" pidnum="3016" value="-1" name="snapshot_delete_retry_max" />
        <flag type="boolean" pidnum="3016" value="true" name="utilize_changed_block_list" />
      </catalog>
      <browse-from-catalog />
      <free-form />
      <agent_directives>
        <flag type="string" value="true" name="from-stdin" />
        <flag type="string" value="pax" name="streamformat" />
        <flag type="string" value="0" name="freezetimeout" />
        <flag type="string" value="none" name="freezemethod" />
        <flag type="string" value="true" name="noinodetable" />
        <flag type="string" value="/root/110-b89b2dc45b5ea784574c69b6d7b6f9cc/VCenter_LU01-Q8-O8/vcsa.vsphere.dev/VirtualMachines/sdfgq/dolly-W2016_6p8kBodUOjugjHq2oBYqIA" name="account" />
        <flag type="string" value="backuponly" name="id" />
        <flag type="string" value="ave751-2907-allumette.vsphere.dev" name="server" />
        <flag type="password" value="****" name="password" />
        <flag type="string" value="file" name="app-consistent" />
        <flag type="string" value="" name="incremental" />
        <flag type="string" value="synthetic_full" name="backup-type" />
        <flag type="string" value="8" name="ddr-vm-segmentation-mode" />
      </agent_directives>
      <targetlist />
      <proxyDirectives>
        <flag type="string" value="" name="vm_action" />
        <flag type="string" value="vm-52" name="vm_moref" />
        <flag type="string" value="always" name="snapshot_desired" />
        <flag type="string" value="true" name="change_block_detection_enabled" />
        <flag type="string" value="Microsoft Windows Server 2016 (64-bit)" name="guest_fullname" />
        <flag type="string" value="2" name="last_backup_labelnum" />
        <flag type="string" value="Avamar-1570024846f73adf5e4b0dbe2f385c61c20fce38008cfbd58a" name="last_snap_name" />
        <flag type="string" value="false" name="powered_on" />
        <flag type="string" value="false" name="template" />
        <flag type="string" value="dolly-W2016" name="vmname" />
        <flag type="string" value="[datastore1] dolly-W2016/dolly-W2016.vmx" name="vmx_path" />
        <flag type="string" value="/ESX-Beta" name="vmware_datacenter" />
        <flag type="string" value="163.172.76.15" name="esxserver" />
        <flag type="string" value="guestToolsCurrent" name="vmtools_installed" />
        <flag type="string" value="10272" name="vmtools_version" />
        <flag type="string" value="vcsa.vsphere.dev" name="vmware_server" />
        <flag type="string" value="443" name="vcserverport" />
        <flag type="password" value="****" name="ssl_server_cert_thumbprint" />
      </proxyDirectives>
      <vmware vmAction="">
        <vcInfo vcServerUserId="administrator@vsphere.dev" vcServerPort="443" vcServerUserPassword="*******" vcSessionId="" vcServer="vcsa.vsphere.dev" vcDomain="/root/110-b89b2dc45b5ea784574c69b6d7b6f9cc/VCenter_LU01-Q8-O8/vcsa.vsphere.dev" vcThumbprint="********" />
        <vmSrcInfo>
          <vmInfo guestFullName="Microsoft Windows Server 2016 (64-bit)" numEthernetCards="1" datacenter="/ESX-Beta" resourcePool="resgroup-18" snapshotDesired="always" vmMoRef="vm-52" guestId="windows9Server64Guest" guestOs="windows9Server64Guest" changeBlockDetectionEnabled="true" vmxPath="[datastore1] dolly-W2016/dolly-W2016.vmx" template="false" hostname="WIN-4TIV5QE1900" vmxContent=".encoding = &quot;UTF-8&quot;&#xA;config.version = &quot;8&quot;&#xA;virtualHW.version = &quot;13&quot;&#xA;nvram = &quot;dolly-W2016.nvram&quot;&#xA;pciBridge0.present = &quot;TRUE&quot;&#xA;svga.present = &quot;TRUE&quot;&#xA;pciBridge4.present = &quot;TRUE&quot;&#xA;pciBridge4.virtualDev = &quot;pcieRootPort&quot;&#xA;pciBridge4.functions = &quot;8&quot;&#xA;pciBridge5.present = &quot;TRUE&quot;&#xA;pciBridge5.virtualDev = &quot;pcieRootPort&quot;&#xA;pciBridge5.functions = &quot;8&quot;&#xA;pciBridge6.present = &quot;TRUE&quot;&#xA;pciBridge6.virtualDev = &quot;pcieRootPort&quot;&#xA;pciBridge6.functions = &quot;8&quot;&#xA;pciBridge7.present = &quot;TRUE&quot;&#xA;pciBridge7.virtualDev = &quot;pcieRootPort&quot;&#xA;pciBridge7.functions = &quot;8&quot;&#xA;vmci0.present = &quot;TRUE&quot;&#xA;hpet0.present = &quot;TRUE&quot;&#xA;floppy0.present = &quot;FALSE&quot;&#xA;svga.vramSize = &quot;8388608&quot;&#xA;numvcpus = &quot;2&quot;&#xA;memSize = &quot;10240&quot;&#xA;sched.cpu.units = &quot;mhz&quot;&#xA;sched.cpu.affinity = &quot;all&quot;&#xA;powerType.powerOff = &quot;default&quot;&#xA;powerType.suspend = &quot;default&quot;&#xA;powerType.reset = &quot;default&quot;&#xA;tools.upgrade.policy = &quot;manual&quot;&#xA;scsi0.virtualDev = &quot;lsisas1068&quot;&#xA;scsi0.present = &quot;TRUE&quot;&#xA;sata0.present = &quot;TRUE&quot;&#xA;usb_xhci.present = &quot;TRUE&quot;&#xA;scsi0:0.deviceType = &quot;scsi-hardDisk&quot;&#xA;scsi0:0.fileName = &quot;dolly-W2016.vmdk&quot;&#xA;sched.scsi0:0.shares = &quot;normal&quot;&#xA;sched.scsi0:0.throughputCap = &quot;off&quot;&#xA;scsi0:0.present = &quot;TRUE&quot;&#xA;ethernet0.virtualDev = &quot;e1000e&quot;&#xA;ethernet0.networkName = &quot;NAT Network&quot;&#xA;ethernet0.addressType = &quot;vpx&quot;&#xA;ethernet0.generatedAddress = &quot;00:50:56:bc:dc:d1&quot;&#xA;ethernet0.present = &quot;TRUE&quot;&#xA;sata0:0.deviceType = &quot;cdrom-image&quot;&#xA;sata0:0.fileName = &quot;/vmfs/volumes/5d37011a-fefd499c-3702-a0369fb3d7f8/ISO/WIN_SERV_STD2016_64Bit_French.ISO&quot;&#xA;sata0:0.present = &quot;TRUE&quot;&#xA;displayName = &quot;dolly-W2016&quot;&#xA;guestOS = &quot;windows9srv-64&quot;&#xA;toolScripts.afterPowerOn = &quot;TRUE&quot;&#xA;toolScripts.afterResume = &quot;TRUE&quot;&#xA;toolScripts.beforeSuspend = &quot;TRUE&quot;&#xA;toolScripts.beforePowerOff = &quot;TRUE&quot;&#xA;uuid.bios = &quot;42 3c a5 6c e0 3c 75 0c-15 fd 98 6f cc c7 90 e9&quot;&#xA;vc.uuid = &quot;50 3c f7 64 b9 5b 57 2a-be 5a 4c 86 f7 ea b7 af&quot;&#xA;vm.createDate = &quot;1564666561137007&quot;&#xA;migrate.hostLog = &quot;dolly-W2016-08609c3b.hlog&quot;&#xA;sched.cpu.min = &quot;0&quot;&#xA;sched.cpu.shares = &quot;normal&quot;&#xA;sched.mem.min = &quot;0&quot;&#xA;sched.mem.minSize = &quot;0&quot;&#xA;sched.mem.shares = &quot;normal&quot;&#xA;migrate.encryptionMode = &quot;opportunistic&quot;&#xA;numa.autosize.vcpu.maxPerVirtualNode = &quot;2&quot;&#xA;numa.autosize.cookie = &quot;20001&quot;&#xA;sched.swap.derivedName = &quot;/vmfs/volumes/5d37011a-fefd499c-3702-a0369fb3d7f8/dolly-W2016/dolly-W2016-ee572467.vswp&quot;&#xA;uuid.location = &quot;56 4d 5f 6b 80 1d 53 8a-02 87 c1 b3 dd 72 60 ad&quot;&#xA;scsi0:0.redo = &quot;&quot;&#xA;pciBridge0.pciSlotNumber = &quot;17&quot;&#xA;pciBridge4.pciSlotNumber = &quot;21&quot;&#xA;pciBridge5.pciSlotNumber = &quot;22&quot;&#xA;pciBridge6.pciSlotNumber = &quot;23&quot;&#xA;pciBridge7.pciSlotNumber = &quot;24&quot;&#xA;scsi0.pciSlotNumber = &quot;160&quot;&#xA;ethernet0.pciSlotNumber = &quot;192&quot;&#xA;usb_xhci.pciSlotNumber = &quot;224&quot;&#xA;vmci0.pciSlotNumber = &quot;32&quot;&#xA;sata0.pciSlotNumber = &quot;33&quot;&#xA;scsi0.sasWWID = &quot;50 05 05 6c e0 3c 75 00&quot;&#xA;vmci0.id = &quot;-859336471&quot;&#xA;vm.genid = &quot;-33925134714457813&quot;&#xA;vm.genidX = &quot;-6075652963573027287&quot;&#xA;monitor.phys_bits_used = &quot;43&quot;&#xA;vmotion.checkpointFBSize = &quot;4194304&quot;&#xA;vmotion.checkpointSVGAPrimarySize = &quot;8388608&quot;&#xA;cleanShutdown = &quot;TRUE&quot;&#xA;softPowerOff = &quot;TRUE&quot;&#xA;sata0:0.startConnected = &quot;TRUE&quot;&#xA;toolsInstallManager.lastInstallError = &quot;0&quot;&#xA;svga.guestBackedPrimaryAware = &quot;TRUE&quot;&#xA;tools.syncTime = &quot;FALSE&quot;&#xA;tools.remindInstall = &quot;FALSE&quot;&#xA;toolsInstallManager.updateCounter = &quot;1&quot;&#xA;extendedConfigFile = &quot;dolly-W2016.vmxf&quot;&#xA;monitor.virtual_mmu = &quot;software&quot;&#xA;monitor.virtual_exec = &quot;software&quot;&#xA;usb_xhci:4.present = &quot;TRUE&quot;&#xA;usb_xhci:4.deviceType = &quot;hid&quot;&#xA;usb_xhci:4.port = &quot;4&quot;&#xA;usb_xhci:4.parent = &quot;-1&quot;&#xA;ctkEnabled = &quot;TRUE&quot;&#xA;scsi0:0.ctkEnabled = &quot;TRUE&quot;&#xA;" nvramContent="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" prevBackup="2" ipAddress="null" instanceUuid="503cf764-b95b-572a-be5a-4c86f7eab7af" vmToolsInstalled="guestToolsCurrent" poweredOn="false" version="vmx-13" esxServer="163.172.76.15" vmName="dolly-W2016" vmToolsVersion="10272" memoryMB="10240" prevSnapName="Avamar-1570024846f73adf5e4b0dbe2f385c61c20fce38008cfbd58a" numCpu="2" folder="/ESX-Beta/vm/Clônes/dolly-W2016" />
          <vmDiskInfoList numDisks="1">
            <vmDiskInfo fileBackingClass="com.vmware.vim25.VirtualDiskFlatVer2BackingInfo" datastoreUrl="ds:///vmfs/volumes/5d37011a-fefd499c-3702-a0369fb3d7f8/" diskMode="persistent" compatibilityMode="NA" vmdkFilename="[datastore1] dolly-W2016/dolly-W2016.vmdk" vmdkBaseFile="[datastore1] dolly-W2016/dolly-W2016.vmdk" capacityInKB="62914560" srcOrdinal="-1" backup="true" label="Hard disk 1" diskKey="2000" ordinal="1" datastore="datastore1" prevCapacityInKB="62914560" thinProvisioned="false" baseDatastore="datastore1" prevChangeID="52 80 ee 50 cd 80 61 0a-03 d7 cb 12 d0 28 1d a2/2" />
          </vmDiskInfoList>
        </vmSrcInfo>
      </vmware>
    </snapup>
    
    2019-10-03 09:49:29 avtar Info <5905>: Incremental flags: --sequencenumber=2
    2019-10-03 09:49:29 avtar Info <5946>: File system character encoding is UTF-8.
    2019-10-03 09:49:29 avtar Info <5588>: - Creating process lock file "/usr/local/avamarclient/var/VmImage1_avtar.lck", pid=30582
    2019-10-03 09:49:29 avtar Info <8940>: Starting back up at 2019-10-03 09:49:29 UTC as "root" on "proxy751-ii.vsphere.dev" (4 CPUs) [7.5.101-101]
    2019-10-03 09:49:29 avtar Info <5731>: Not using include/exclude list
    2019-10-03 09:49:29 avtar Info <8474>: - Log file path: Pol3VgEBpPu_0-1570096131001-f73adf5e4b0dbe2f385c61c20fce38008cfbd58a-3016-vmimagew_avtar.log
    2019-10-03 09:49:29 avtar Info <6555>: Initializing connection
    2019-10-03 09:49:29 avtar Info <5552>: Connecting to Avamar Server (ave751-2907-allumette.vsphere.dev)
    2019-10-03 09:49:29 avtar Info <5554>: Connecting to one node in each datacenter
    2019-10-03 09:49:29 avtar Info <5993>: - Connect: Connected to 192.168.1.52:29000, Priv=0, SSL Cipher=AES256-SHA
    2019-10-03 09:49:29 avtar Info <5993>: - Datacenter 0 has 1 nodes: Connected to 192.168.1.52:29000, Priv=0, SSL Cipher=AES256-SHA
    2019-10-03 09:49:29 avtar Info <5581>: Logging in on connection 0 with Session Ticket
    2019-10-03 09:49:29 avtar Info <5582>: Avamar Server login successful
    2019-10-03 09:49:29 avtar Info <5018>: - Session ID: 0
    2019-10-03 09:49:29 avtar Info <10632>: Using Client-ID='f73adf5e4b0dbe2f385c61c20fce38008cfbd58a'
    2019-10-03 09:49:29 avtar Info <5550>: Successfully logged into Avamar Server [7.5.1-101] (Compression enabled)
    2019-10-03 09:49:29 avtar Info <7562>: Back up of stdin on server "ave751-2907-allumette.vsphere.dev" for /root/110-b89b2dc45b5ea784574c69b6d7b6f9cc/VCenter_LU01-Q8-O8/vcsa.vsphere.dev/VirtualMachines/sdfgq/dolly-W2016_6p8kBodUOjugjHq2oBYqIA
    2019-10-03 09:49:29 avtar Info <5586>: Loading cache files from /usr/local/avamarclient/var
    2019-10-03 09:49:29 avtar Info <5769>: Filecache is disabled.
    2019-10-03 09:49:29 avtar Info <8650>: Opening hash cache file '/usr/local/avamarclient/var/VmImage1_p_cache.dat'
    2019-10-03 09:49:29 avtar Info <5573>: - Loaded hash cache file (50,332,192 bytes), the value maybe the same as previous backups.
    2019-10-03 09:49:30 avtar Info <6426>: Done loading cache files
    2019-10-03 09:49:30 avtar Info <6995>: Parsing 'pax' stream format from stdin
    2019-10-03 09:49:30 avtar Info <8478>: Using backup #2 timestamp 2019-10-02 14:01:39 UTC label "Sch3VgEBpPu_0-Pol3VgEBpPu_0-1570024800025#1" as base for incremental backup
    2019-10-03 09:49:30 avtar Info <10818>: Backstream creating root backstreamdir object
    2019-10-03 09:49:30 avtar Info <8648>: Directory elements will be sorted: No
    2019-10-03 09:49:30 avtar Info <8649>: Sub-file change blocks enabled: Yes
    2019-10-03 09:49:48 avtar Warning <43225>: Ignoring increased file size (-1) less than or equal to base file size (64424509440).
    2019-10-03 09:49:48 avtar Info <10695>: Processing 1 changeblocks for "virtdisk-flat.vmdk" (64,424,509,440 bytes)
    2019-10-03 09:49:48 avtar Info <10698>: - Changeblock #1 offset=0, bytes=65536
    2019-10-03 09:50:11 avtar Info <5163>: Backup complete, wrapping-up session with Server
    2019-10-03 09:50:11 avtar Info <7238>: Stream complete: 125,952 bytes read from stream
    2019-10-03 09:50:11 avtar Info <5156>: Backup #3 timestamp 2019-10-03 09:50:11, 0 files, 60.00 GB (0 files, 5.609 KB, 0.00% new)
    2019-10-03 09:50:11 avtar Info <7539>: Label "Pol3VgEBpPu_0-1570096131001#1", scheduled to expire after 10/11/19 (2019-10-11 09:48:51 UTC), daily backup, backup type: synthetic_full
    2019-10-03 09:50:11 avtar Info <6083>: Backed-up 60.00 GB in 0.70 minutes: 5,146 GB/hour (0 files/hour)
    2019-10-03 09:50:11 avtar Info <5587>: Updating cache files in /usr/local/avamarclient/var
    2019-10-03 09:50:11 avtar Info <7883>: Finished at 2019-10-03 09:50:11 UTC, Elapsed time: 0000h:00m:41s
    2019-10-03 09:50:11 avtar Info <8468>: Sending wrapup message to parent
    2019-10-03 09:50:11 avtar Info <5314>: Command completed (1 warning, exit code 0: success)
    
    --------------------------------------------------------------------------------------------------------
    ----- END avtar log 2019-10-03 09:50:11 UTC  (1 warning, 0 errors, 0 fatal errors)
    --------------------------------------------------------------------------------------------------------
    
    
    `}
    </CodeBlock>
  </Wrapper>
)
codeBlock.story = {
  parameters: {
    notes: { markdown },
    jest:  ['CodeBlock.test.jsx'],
  },
}
